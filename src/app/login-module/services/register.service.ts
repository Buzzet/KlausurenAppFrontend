import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../modules/user';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  url = environment.nutzerService + '/users/userPersistence';

  register(user: User): void{
    this.http.post(this.url, user).subscribe(ref => {});
  }
}
