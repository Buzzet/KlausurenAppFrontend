import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
username: string;
  constructor(private router: Router) { }
  version: string;

  ngOnInit(): void {
   this.username = localStorage.getItem('klausuren-user');
   this.version = environment.version;
  }

  logout(): void{
    localStorage.clear();
    this.router.navigateByUrl('login');
  }
}
