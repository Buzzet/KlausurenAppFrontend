import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { HeaderComponent } from './header/header.component';
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { ViewKlausurComponent } from './view-klausur/view-klausur.component';
import { PostKlausurComponent } from './post-klausur/post-klausur.component';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    HeaderComponent,
    UserInterfaceComponent,
    ViewKlausurComponent,
    PostKlausurComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
