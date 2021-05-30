import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginResponse} from '../../login-response';
import {User} from '../modules/user';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {RouteConfigLoadStart, Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import { Configuration, KlausurenControllerService } from 'projects/klausuren-api/src';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private loginSubject$ = new Subject<LoginResponse>();

  login$ = this.loginSubject$.asObservable();
  public jwt = '';

  loggedInSubject$ = new BehaviorSubject<boolean>(false);

  loggedIn$ = this.loggedInSubject$.asObservable();

  private url = environment.nutzerService + '/users/login';

  constructor(private http: HttpClient, router: Router, private klausurenApi: KlausurenControllerService) { }

 static getApiConfiguration(): Configuration {
    return new Configuration({basePath: environment.klausurenService});
  }

  async autoLogIn(): Promise<LoginResponse>{
    if (localStorage.getItem('klausuren-user')){
      const user: User = {userPassword: localStorage.getItem('klausuren-pw'), userMail: localStorage.getItem('klausuren-user')};
      return this.logIn(user);
    }
  }

  async logIn(user: User): Promise<LoginResponse>{
    const response = await this.http.post<LoginResponse>(this.url, user).toPromise();
    this.loginSubject$.next(response);
    if (response.jwtBearer !== null){
      this.jwt = response.jwtBearer;
      this.loggedInSubject$.next(true);
      localStorage.setItem('klausuren-user', user.userMail);
      localStorage.setItem('klausuren-pw', user.userPassword);
    }
    this.klausurenApi.configuration.accessToken = this.jwt;
    return response;
  }

  getApiConfiguration(){
    return null;
  }
}
