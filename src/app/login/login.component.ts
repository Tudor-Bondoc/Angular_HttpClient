import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  login1:FormGroup|any;
  post: any;

  constructor(private formBuilder : FormBuilder, private http:HttpClient, private router:Router, public userr:UserService) { }

  ngOnInit(): void {
    this.login1 = new FormGroup({
      'username':new FormControl(),
      'password':new FormControl()
    });
  }

  logindata(login1:FormGroup) {
    /*console.log(this.login1.value);*/
    this.http.get<any>("https://630fa7b0498924524a9347b3.mockapi.io/login").subscribe(
      (response) => {
        const user = response.find((a:any)=>{
          return a.username===this.login1.value.username && a.password===this.login1.value.password;
        }
        );
        if (user)
        {
          alert ("You have successfuly logged in");
          var a:string;
          a=user.username;
          this.userr.setUser(a, user.userId);
          this.router.navigate(['dashboard']);
          this.login1.reset();
        }
        else
        {
          alert ("User not found");
          this.login1.reset();
        }
        
      },
      (error) => {
        console.log("Error connecting to the database");
      },
      () => console.log("Database upgraded")
    );
  }

}
