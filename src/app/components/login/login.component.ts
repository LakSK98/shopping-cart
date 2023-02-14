import { Component } from "@angular/core";
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from "@angular/router";
import { HttpService } from "src/app/services/http/http.service";
import { UserService } from "src/app/services/user/user.service";
import  User  from 'src/app/models/user.model';

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

    constructor(private httpService: HttpService, private router: Router, private userService: UserService){}

    loginData = { email:'', password:'' };

    hide = true;
    emailFormControl = new FormControl('', [Validators.required, Validators.email]);
    passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);
    matcher = new MyErrorStateMatcher();

    onClickLogin(){
        this.httpService.postData('users/login',this.loginData).subscribe((res:User)=>{
            this.userService.setUserData(res);
            this.router.navigate([`/home/${res.id}`]);
        },error=>{
            
        });
    }

}