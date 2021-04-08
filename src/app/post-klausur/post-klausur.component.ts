import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-klausur',
  templateUrl: './post-klausur.component.html',
  styleUrls: ['./post-klausur.component.css']
})
export class PostKlausurComponent implements OnInit {

  constructor() { }
  studiengaenge: String[] = ['Wirtschaftsinformatik', 'Betriebswirtschaftslehre', 'Angewante Informatik'];
  semesters: String[] = ['Semester 1', 'Semester 2', 'Semester 3'];
  moduls: String[] = ['PM2', 'IN2', 'SEA'];
  ngOnInit(): void {
  }

}
