import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders, HttpResponse } from '@angular/common/http';
import { KlausurenService } from '../services/klausuren.service';

@Component({
  selector: 'app-post-klausur',
  templateUrl: './post-klausur.component.html',
  styleUrls: ['./post-klausur.component.css']
})
export class PostKlausurComponent implements OnInit {
  progress;
  files = undefined;
  btnKlausurDisable = true;
  constructor(public klausurenService: KlausurenService) { }
  studiengaenge: string[] = ['Wirtschaftsinformatik', 'Betriebswirtschaftslehre', 'Angewante Informatik'];
  semesters: string[] = ['Semester 1', 'Semester 2', 'Semester 3'];
  moduls: string[] = ['PM2', 'IN2', 'SEA'];
  ngOnInit(): void {
  }

  onFileInput(files: FileList): void {
    this.btnKlausurDisable = false;
    this.files = files;
  }

  upload() {
    console.log(this.files)
    let response = this.klausurenService.uploadKlausur(this.files);
    response.subscribe(event => {
      console.log(event)
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
        console.log(this.progress)
      } else if (event instanceof HttpResponse) {
        alert('File Successfully Uploaded');
      }
    })
  }
}
