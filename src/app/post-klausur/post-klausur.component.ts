import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-klausur',
  templateUrl: './post-klausur.component.html',
  styleUrls: ['./post-klausur.component.css']
})
export class PostKlausurComponent implements OnInit {

  constructor() { }
  studiengaenge: string[] = ['Wirtschaftsinformatik', 'Betriebswirtschaftslehre', 'Angewante Informatik'];
  semesters: string[] = ['Semester 1', 'Semester 2', 'Semester 3'];
  moduls: string[] = ['PM2', 'IN2', 'SEA'];
  ngOnInit(): void {
  }

  onFileInput(files: FileList): void {
    console.log(files);
  }
}
