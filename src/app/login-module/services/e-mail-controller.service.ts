import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EMailControllerService {

  constructor(private http: HttpClient) { }
  url = environment.emailValidationService;
  public postEmailToService(eMail: string): boolean{
      this.http.post(this.url + '/emailVerification', eMail).subscribe(ref => {
        console.log(ref);
      }, error => {
        console.log(error);
      });
      return true;
  }
}
