import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login-module/services/login.service';

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css']
})
export class UserInterfaceComponent implements OnInit {

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
  }

}
