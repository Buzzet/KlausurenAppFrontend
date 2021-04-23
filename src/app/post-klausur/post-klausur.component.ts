import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-post-klausur',
  templateUrl: './post-klausur.component.html',
  styleUrls: ['./post-klausur.component.css']
})
export class PostKlausurComponent implements OnInit {

  constructor(public httpClient: HttpClient) { }
  studiengaenge: string[] = ['Wirtschaftsinformatik', 'Betriebswirtschaftslehre', 'Angewante Informatik'];
  semesters: string[] = ['Semester 1', 'Semester 2', 'Semester 3'];
  moduls: string[] = ['PM2', 'IN2', 'SEA'];
  ngOnInit(): void {
  }

  onFileInput(files: FileList): void {
    const formData: FormData = new FormData();
    formData.append('fileArray', files[0], files[0].name);
    this.httpClient.post('http://localhost:8089/test/klausurUpload', formData).subscribe(resp => {
      console.log(resp);
    });
  }
}
