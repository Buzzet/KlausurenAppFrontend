import { Component, OnInit } from '@angular/core';
import { RouterGuardService } from '../services/router-guard.service';

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css']
})
export class UserInterfaceComponent implements OnInit {

  protocol = '';

  constructor(public routerGuard: RouterGuardService) { }

  ngOnInit(): void {
    this.protocol = document.location.protocol;
  }

}
