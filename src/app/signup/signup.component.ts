import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signup1:FormGroup|any;

  constructor(private formBuilder : FormBuilder, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signup1 = new FormGroup({
      'username':new FormControl(),
      'password':new FormControl(),
      'email': new FormControl(),
      'phone': new FormControl()
    });
  }

  signupdata(signup1:FormGroup) {
    const b = this.http.post<any>("https://630fa7b0498924524a9347b3.mockapi.io/login",this.signup1.value);
    b.subscribe(
      (response) => {
        this.router.navigate(['/login']);
        this.signup1.reset();
        console.log("ID intors de functia PUT: " + b);
      },
      (error) => {
        alert("Error");
        console.log("Error");
      },
      () => console.log("Database upgraded")
    );
  }

}
