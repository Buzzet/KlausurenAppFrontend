import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PostKlausurComponent } from './post-klausur/post-klausur.component';
import { RegisterEmailSendComponent } from './register-email-send/register-email-send.component';
import { RegisterPasswordComponent } from './register-password/register-password.component';
import { RegisterComponent } from './register/register.component';
import { ViewKlausurComponent } from './view-klausur/view-klausur.component';

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
