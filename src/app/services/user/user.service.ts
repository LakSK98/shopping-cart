import { Injectable } from '@angular/core';
import User from 'src/app/models/user.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  userData: User | undefined;

  setUserData(data: User) {
    this.userData = data;
  }

  getUserData() {
    return this.userData;
  }

}
