import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {LoginService} from '../../services/login.service';
import {User} from '../../modules/user';
import { Location } from '@angular/common';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  mail = '';
  pw = '';

  constructor(public router: Router, private loginService: LoginService, private location: Location) { }

  async ngOnInit(): Promise<void> {
    if (localStorage.getItem('klausuren-user')){
      await this.loginService.autoLogIn();
      this.router.navigateByUrl('klausuren/view');
    }
    console.log(this.location);
  }


  async onClickLogin(): Promise<void>{
    console.log('keyup enter');
    const user: User = {
      userMail: this.mail.toLocaleLowerCase(),
      userPassword: this.pw,
    };
    const promise = await this.loginService.logIn(user);
    this.router.navigateByUrl('klausuren/view');
  }

  onClickRegister(): void{
    this.router.navigateByUrl('register');
  }
}
