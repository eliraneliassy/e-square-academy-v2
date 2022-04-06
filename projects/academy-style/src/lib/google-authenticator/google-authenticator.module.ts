import {NgModule} from "@angular/core";
import {GoogleAuthenticatorComponent} from "./google-authenticator.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations:[GoogleAuthenticatorComponent],
  exports:[GoogleAuthenticatorComponent],
  imports:[
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class GoogleAuthenticatorModule{}
