import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../app/auth.service";

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

  formGroup = new FormGroup({
    username: new FormControl(undefined,[Validators.required]),
    password: new FormControl(undefined,Validators.compose([Validators.required,Validators.minLength(4)]))
  });
  user: IUser = {
    username: 'yonatan@yaltman.com',
    password: ''
  };

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  resetFormTopServer() {
    console.count('form reset');
  }

  onSubmit() {
    console.log(this.formGroup.value)
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value['username'])
    }else {
      // error
      console.error('Form is not valid')
    }

  }
  print(value:any){

  }
}
