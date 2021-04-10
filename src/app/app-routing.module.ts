import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostKlausurComponent } from './post-klausur/post-klausur.component';
import { ViewKlausurComponent } from './view-klausur/view-klausur.component';

const routes: Routes = [
  { path: 'view', component: ViewKlausurComponent},
  { path: 'post', component: PostKlausurComponent},
  {path: '**', component: ViewKlausurComponent}
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
