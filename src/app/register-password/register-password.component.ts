import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-register-password',
  templateUrl: './register-password.component.html',
  styleUrls: ['./register-password.component.css']
})
export class RegisterPasswordComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  email: string;
  hide: boolean = true;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.email = atob(params.email);
      console.log(this.email);
    });
  }

  onClickRegister(): void{}

}
