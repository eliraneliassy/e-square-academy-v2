import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {GoogleAuthenticatorModule, InputModule} from "@academy-style";


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    GoogleAuthenticatorModule,
    InputModule,
    RouterModule.forChild([{path: '', component: LoginComponent}])
  ]
})
export class LoginModule {
}
