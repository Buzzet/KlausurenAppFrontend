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
    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    this.toggleDarkTheme(prefersDark.matches);

// Listen for changes to the prefers-color-scheme media query
    prefersDark.addListener((mediaQuery) => this.toggleDarkTheme(mediaQuery.matches));
  }
  toggleDarkTheme(shouldAdd): void {
    document.body.classList.toggle('darkMode', shouldAdd);
  }
  isIPhoneCordovaApp(): boolean{
    if (document.location.protocol === 'file:' && navigator.userAgent.toLocaleLowerCase().indexOf('iphone') !== -1){
      return true;
    }
    return false;
  }

}
