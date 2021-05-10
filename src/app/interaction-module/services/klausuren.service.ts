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

  uploadKlausur(files: FileList): Observable<any>{
    const data: FormData = new FormData();
    data.append('fileArray', files[0]);
      let body = {'title': files[0].name, 'fileArray': files}
            
      return this.httpClient.post(this.url + "/test/klausurUpload", data, {
        reportProgress: true,
        responseType: 'text'
        })
  }

}

