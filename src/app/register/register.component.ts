import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EMailControllerService } from '../services/e-mail-controller.service';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private emailService: EMailControllerService, private router: Router, public register: RegisterService) { }

  emailAddress: String = "";
  validationFailed: boolean = false;
  ngOnInit(): void {
  }

  onClickRegister():void{
    if(this.emailAddress.includes('@')){
      this.validationFailed = true;
      return;
    }
    console.log("emailServiceAufrufen")
    this.emailService.postEmailToService(this.emailAddress + '@haw-hamburg.de');
    this.register.email = this.emailAddress + '@haw-hamburg.de';
    this.router.navigate(['register/send']);
  }

}
