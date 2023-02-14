import { Injectable } from '@angular/core';
import User from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  userData : User | undefined;

  setUserData(user:User){
    this.userData = user;
  }

}
