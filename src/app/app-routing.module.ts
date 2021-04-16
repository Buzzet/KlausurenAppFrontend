import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PostKlausurComponent } from './post-klausur/post-klausur.component';
import { RegisterComponent } from './register/register.component';
import { ViewKlausurComponent } from './view-klausur/view-klausur.component';

const routes: Routes = [
  { path: 'view', component: ViewKlausurComponent},
  { path: 'post', component: PostKlausurComponent},
  { path: 'register', component: RegisterComponent},
  {path: '**', component: LoginComponent}
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
