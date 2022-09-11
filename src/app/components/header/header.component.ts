import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import {UserService} from '../../service/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  namee;

  constructor(private router:Router, public user:UserService) { }

  ngOnInit(): void {
    console.log('User logat: ' + this.user.getUserID());
    console.log('Username: ' + this.user.getUserName());
    this.namee = this.user.getUserName();
  }

  logout() {
    this.router.navigate(['/login']);
  }

}
