import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterGuardService } from '../services/router-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide: boolean = true;

  constructor(public router: Router, public routerGuard: RouterGuardService) { }

  ngOnInit(): void {
  }


  onClickLogin(): void{
    this.routerGuard.loggedIn = true;
    this.router.navigate(['view']);
  }

  onClickRegister(): void{
    this.router.navigate(['register']);
  }
}
