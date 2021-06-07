import {Component, NgZone, OnInit} from '@angular/core';
import {LoginService} from '../login-module/services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css']
})
export class UserInterfaceComponent implements OnInit {

  constructor(public loginService: LoginService, private router: Router, private ngZone: NgZone) { }

  ngOnInit(): void {
    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.router.navigateByUrl('login');
    this.toggleDarkTheme(prefersDark.matches);

// Listen for changes to the prefers-color-scheme media query
    prefersDark.addListener((mediaQuery) => this.toggleDarkTheme(mediaQuery.matches));
  }
  toggleDarkTheme(shouldAdd): void {
    document.body.classList.toggle('darkMode', shouldAdd);
  }


}
