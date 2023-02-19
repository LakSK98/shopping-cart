import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import TokenResponse from 'src/app/models/token-response-model';
import { setIsLogged } from 'src/app/store/login/login.actions';
import { HttpService } from '../http/http.service';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly httpService: HttpService,
    private readonly userService: UserService,
    private readonly router: Router,
    private readonly loginStore: Store<{login:boolean}>
  ) { 
  }

  getToken() {
    const userToken = localStorage.getItem('userToken');
    if (userToken) {
      return userToken;
    }
    return null;
  }

  getHeader() {
    const userToken = this.getToken();
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${userToken}`)
    }
    return header;
  }

  login(loginData: any) {
    this.httpService.postData('users/login', loginData).subscribe((res: TokenResponse) => {
      localStorage.setItem('userToken', res.access_token);
      this.authorizeUser();
      this.router.navigate([`/home/${res.access_token}`]);
    }, error => {

    });
  }

  register(registerData: any) {
    this.httpService.postData('users/register', registerData).subscribe((res: TokenResponse) => {
      localStorage.setItem('userToken', res.access_token);
      this.authorizeUser();
      this.router.navigate([`/home/${res.access_token}`]);
    }, error => {

    });
  }

  authorizeUser(){
    this.httpService.getDataWithHeaders('users/auth', this.getHeader())
      .subscribe(res => {
        this.userService.setUserData({ ...res, password: "Not Accessible" });
        this.loginStore.dispatch(setIsLogged({isLogged:true}));
      }, error => this.loginStore.dispatch(setIsLogged({isLogged:false})));
  }

  logOut() {
    localStorage.clear();
    this.loginStore.dispatch(setIsLogged({isLogged:false}))
    this.router.navigate([`/home`]);
  }

}
