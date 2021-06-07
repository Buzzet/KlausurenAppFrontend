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
import {IonicModule} from '@ionic/angular';



@NgModule({
  declarations: [
    RegisterComponent,
    RegisterEmailSendComponent,
    RegisterPasswordComponent,
    LoginComponent
  ],
    imports: [
        CommonModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        FormsModule,
        IonicModule
    ],
  exports: [
    RegisterComponent,
    RegisterEmailSendComponent,
    RegisterPasswordComponent,
    LoginComponent
  ]
})
export class LoginModule { }
