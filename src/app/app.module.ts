import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {LoginModule} from './login-module/login.module';
import {InteractionModule} from './interaction-module/interaction.module';
import {UserInterfaceComponent} from './user-interface/user-interface.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { IonicModule } from '@ionic/angular';
import { ApiModule } from 'projects/klausuren-api/src';
import { LoginService } from './login-module/services/login.service';


@NgModule({
  declarations: [
    AppComponent,
    UserInterfaceComponent,
    PrivacyPolicyComponent,
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
    LoginModule,
    IonicModule.forRoot(),
    ApiModule.forRoot(LoginService.getApiConfiguration),
    InteractionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
