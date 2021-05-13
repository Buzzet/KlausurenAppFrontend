import { Component, OnInit } from '@angular/core';
import { RouterGuardService } from '../services/router-guard.service';

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css']
})
export class UserInterfaceComponent implements OnInit {


  constructor(public routerGuard: RouterGuardService) { }

  ngOnInit(): void {
  }

  isIPhoneCordovaApp(): boolean{
    if (document.location.protocol === 'file:' && navigator.userAgent.toLocaleLowerCase().indexOf('iphone') !== -1){
      return true;
    }
    return false;
  }

}
