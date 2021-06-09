import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login-module/components/login/login.component';
import { PostKlausurComponent } from './interaction-module/components/post-klausur/post-klausur.component';
import { RegisterEmailSendComponent } from './login-module/components/register-email-send/register-email-send.component';
import { RegisterPasswordComponent } from './login-module/components/register-password/register-password.component';
import { RegisterComponent } from './login-module/components/register/register.component';
import { ViewKlausurComponent } from './interaction-module/components/view-klausur/view-klausur.component';
import {AuthGuard} from './auth.guard';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import {PdfViewerComponent} from './interaction-module/components/pdf-viewer/pdf-viewer.component';
import {TabsComponent} from './interaction-module/components/tabs/tabs.component';
import {ProfileComponent} from './interaction-module/components/profile/profile.component';

const routes: Routes = [
  { path: 'register/password', component: RegisterPasswordComponent},
  {path: 'login', component: LoginComponent},
  {path: 'klausuren', component: TabsComponent, children: [
      { path: 'view', component: ViewKlausurComponent, canActivate: [AuthGuard]},
      { path: 'post', component: PostKlausurComponent, canActivate: [AuthGuard]},
      {path: 'klausur', component: PdfViewerComponent, canActivate: [AuthGuard]},
      {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
    ], canActivate: [AuthGuard]},
  { path: 'register', component: RegisterComponent},
  { path: 'register/send', component: RegisterEmailSendComponent},
  { path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', component: LoginComponent}
];;

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
