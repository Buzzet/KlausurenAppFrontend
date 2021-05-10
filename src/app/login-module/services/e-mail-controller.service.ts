import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EMailControllerService {

  constructor(private http: HttpClient) { }
  url: string = "http://87.237.54.34:8202";
  public postEmailToService(eMail: String): boolean{
      this.http.post(this.url + '/emailVerification', eMail).subscribe(ref => {
        console.log(ref);
      }, error => {
        console.log(error);
      })
      return true;
  }
}
