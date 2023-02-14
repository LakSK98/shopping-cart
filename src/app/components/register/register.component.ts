import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { HttpService } from 'src/app/services/http/http.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private httpService: HttpService){}

  confirmPassword = '';
  registerData = { mobileNumber:'', email:'', password:'' };
  hide = true;
  mobileNumberFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);
  confirmPasswordFormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);
  matcher = new MyErrorStateMatcher();

  onClickRegister = ():void => {
    this.registerData.mobileNumber = this.registerData.mobileNumber.toString();
    console.log(this.registerData);
    this.httpService.postData('users',this.registerData);
  }
}
