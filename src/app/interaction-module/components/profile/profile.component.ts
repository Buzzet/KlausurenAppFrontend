import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
username: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
   this.username = localStorage.getItem('klausuren-user');
  }

  logout(): void{
    localStorage.clear();
    this.router.navigateByUrl('login');
  }
}
