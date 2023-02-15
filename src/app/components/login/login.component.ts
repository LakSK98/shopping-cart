import { Component } from "@angular/core";
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from "@angular/router";
import { HttpService } from "src/app/services/http/http.service";
import { UserService } from "src/app/services/user/user.service";
import TokenResponse from "src/app/models/token-response-model";
import { AuthService } from "src/app/services/auth/auth.service";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']

})

export class LoginComponent {

    constructor(private authService: AuthService){}

    loginData = { email:'', password:'' };

    hide = true;
    emailFormControl = new FormControl('', [Validators.required, Validators.email]);
    passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);
    matcher = new MyErrorStateMatcher();

    onClickLogin(){
        this.authService.login(this.loginData);
    }

}