import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  constructor(public router: Router) { }

colorView: string = '#FFFFFF';
colorPost: string = '#727272';
colorProfile: string = '#727272';
colorSettings: string = '#727272';

  ngOnInit(): void {
  }

  onClickView(): void{
    this.colorPost = '#727272';
    this.colorView = '#FFFFFF';
    this.router.navigate(['view']);
  }
  onClickPost(): void{
    this.colorView = '#727273';
    this.colorPost = '#FFFFFF';
    this.router.navigate(['post']);
  }

}
