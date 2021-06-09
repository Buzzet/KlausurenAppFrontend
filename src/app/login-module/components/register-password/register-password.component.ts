import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap, convertToParamMap} from '@angular/router';
import {User} from '../../modules/user';
import {RegisterService} from '../../services/register.service';

@Component({
  selector: 'app-register-password',
  templateUrl: './register-password.component.html',
  styleUrls: ['./register-password.component.css']
})
export class RegisterPasswordComponent implements OnInit {

  constructor(private route: ActivatedRoute, private regSvc: RegisterService, private router: Router) { }

  email = 'test123';
  pw = '';
  hide = true;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.email = atob(params.email);
      console.log(this.email);
    });
  }

  onClickRegister(): void{
    const user: User = {
      userPassword: this.pw,
      userMail: this.email
    };
    this.regSvc.register(user);
    this.router.navigateByUrl('/');
  }

}
