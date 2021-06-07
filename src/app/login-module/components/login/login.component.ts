import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from '../../services/login.service';
import {User} from '../../modules/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  mail = '';
  pw = '';

  constructor(public router: Router, private loginService: LoginService) { }

  async ngOnInit(): Promise<void> {
    if (localStorage.getItem('klausuren-user')){
      await this.loginService.autoLogIn();
      this.router.navigateByUrl('klausuren/view');
    }
  }


  async onClickLogin(): Promise<void>{
    const user: User = {
      userMail: this.mail,
      userPassword: this.pw,
    };
    const promise = await this.loginService.logIn(user);
    this.router.navigateByUrl('klausuren/view');
  }

  onClickRegister(): void{
    this.router.navigateByUrl('register');
  }
}
