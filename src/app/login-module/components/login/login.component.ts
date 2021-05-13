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

  ngOnInit(): void {
  }


  async onClickLogin(){
    const user: User = {
      userMail: this.mail,
      userPassword: this.pw,
    };
    const promise = await this.loginService.logIn(user);
    this.router.navigate(['view']);
  }

  onClickRegister(): void{
    this.router.navigate(['register']);
  }
}
