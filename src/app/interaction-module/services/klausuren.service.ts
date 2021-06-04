import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KlausurenService {

  constructor(private httpClient: HttpClient) { }

  url: string = environment.klausurenService;

}

