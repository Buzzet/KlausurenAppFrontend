import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginResponse} from '../../login-response';
import {User} from '../modules/user';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {RouteConfigLoadStart, Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

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
}
