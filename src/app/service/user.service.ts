import { Injectable } from '@angular/core';
import {User} from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  

  userid!:number;
  username!:string;

  constructor() { }

  setUser(name:string, id:number) {
    this.username = name;
    this.userid = id;
  }
  getUserID() {
    return this.userid;
  }
  getUserName() {
    return this.username;
  }
}
