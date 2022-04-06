import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../app/auth.service";
import {AcademyInputConfig} from "@academy-style";

export interface IUser {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userNameConfig: AcademyInputConfig = {
    label: 'user name',
    type: 'text',
    placeholder: 'the best user name!'
  }
  passwordConfig: AcademyInputConfig = {
    label: 'Password',
    type: 'password',
    placeholder: 'I\'m not looking!🤫'
  }
  formGroup = new FormGroup({
    username: new FormControl(undefined, [Validators.required]),
    password: new FormControl(undefined, Validators.compose([Validators.required, Validators.minLength(4)])),
    googleAuthenticator: new FormControl(undefined, Validators.required)
  });
  user: IUser = {
    username: 'yonatan@yaltman.com',
    password: ''
  };

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    // this.formGroup.get('password')?.disable();
    // this.formGroup.get('googleAuthenticator')?.disable();
    // this.formGroup.get('googleAuthenticator')?.setValue({a1:'2',a7:8,a4:2});
    // this.formGroup.disable();
  }

  resetFormTopServer() {
    console.count('form reset');
  }

  onSubmit() {
    console.log(this.formGroup.value)
    // if(this.formGroup.valid){
    //   this.authService.login(this.formGroup.value['username'])
    // }else {
    //   // error
    //   console.error('Form is not valid')
    // }

  }

  print(value: any) {

  }

  onGoogleAuthenticator($event: Event) {
    console.log($event);
  }
}
