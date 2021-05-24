import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {RegisterComponent} from './components/register/register.component';
import {RegisterEmailSendComponent} from './components/register-email-send/register-email-send.component';
import {RegisterPasswordComponent} from './components/register-password/register-password.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RegisterEmailSendComponent,
    RegisterPasswordComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    RegisterEmailSendComponent,
    RegisterPasswordComponent
  ]
})
export class LoginModule { }
