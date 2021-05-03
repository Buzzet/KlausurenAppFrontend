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
import { FormsModule } from '@angular/forms';
import { RegisterEmailSendComponent } from './register-email-send/register-email-send.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterPasswordComponent } from './register-password/register-password.component';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    HeaderComponent,
    UserInterfaceComponent,
    ViewKlausurComponent,
    PostKlausurComponent,
    LoginComponent,
    RegisterComponent,
    RegisterEmailSendComponent,
    RegisterPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
