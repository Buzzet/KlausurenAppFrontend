import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login-module/components/login/login.component';
import { PostKlausurComponent } from './interaction-module/components/post-klausur/post-klausur.component';
import { RegisterEmailSendComponent } from './login-module/components/register-email-send/register-email-send.component';
import { RegisterPasswordComponent } from './login-module/components/register-password/register-password.component';
import { RegisterComponent } from './login-module/components/register/register.component';
import { ViewKlausurComponent } from './interaction-module/components/view-klausur/view-klausur.component';

const routes: Routes = [
  { path: 'view', component: ViewKlausurComponent},
  { path: 'post', component: PostKlausurComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'register/send', component: RegisterEmailSendComponent},
  { path: 'register/password', component: RegisterPasswordComponent},
  {path: '**', component: LoginComponent}
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
