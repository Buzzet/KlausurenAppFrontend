import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginResponse} from '../../login-response';
import {User} from '../modules/user';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {RouteConfigLoadStart, Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import { Configuration } from 'projects/klausuren-api/src';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  static getApiConfiguration(): Configuration {
    return new Configuration({accessToken: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdHJpbmcxMjNAaGF3LWhhbWJ1cmcuZGUiLCJleHAiOjE2MjIwNDA4ODMsImlhdCI6MTYyMTk1NDQ4M30.azOrCe1yjRvVPoXcY7bufxMKnHTqPdaAqjomu3z_6eI'});
  }

  private loginSubject$ = new Subject<LoginResponse>();

  login$ = this.loginSubject$.asObservable();

  loggedInSubject$ = new BehaviorSubject<boolean>(false);

  loggedIn$ = this.loggedInSubject$.asObservable();

  private url = environment.nutzerService + '/users/login';

  constructor(private http: HttpClient, router: Router) { }

  async logIn(user: User): Promise<LoginResponse>{
    const response = await this.http.post<LoginResponse>(this.url, user).toPromise();
    this.loginSubject$.next(response);
    console.log(response.jwtBearer);
    if (response.jwtBearer !== null){
      this.loggedInSubject$.next(true);
    }
    return response;
  }

  getApiConfiguration(){
    return null;
  }
}
