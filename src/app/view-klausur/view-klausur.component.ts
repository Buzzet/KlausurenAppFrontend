import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-klausur',
  templateUrl: './view-klausur.component.html',
  styleUrls: ['./view-klausur.component.css']
})
export class ViewKlausurComponent implements OnInit {

  constructor() { }

studiengaenge: String[] = ['Wirtschaftsinformatik', 'Betriebswirtschaftslehre', 'Angewante Informatik'];
semesters: String[] = ['Semester 1', 'Semester 2', 'Semester 3'];
moduls: String[] = ['PM2', 'IN2', 'SEA'];
  ngOnInit(): void {
  }

}
