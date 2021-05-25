import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { KlausurenControllerService } from 'projects/klausuren-api/src';

@Component({
  selector: 'app-view-klausur',
  templateUrl: './view-klausur.component.html',
  styleUrls: ['./view-klausur.component.css'],
})
export class ViewKlausurComponent implements OnInit {

  constructor(public klausurenApi: KlausurenControllerService) { 
  }

studiengaenge: String[] = ['Wirtschaftsinformatik', 'Betriebswirtschaftslehre', 'Angewante Informatik'];
semesters: String[] = ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4'];
moduls: String[] = ['PM2', 'IN2', 'SEA'];
  ngOnInit(): void {
    this.klausurenApi.getAllStudiengaenge().subscribe(ele => {
      console.log(ele);
    });
  }

  getKlausur(){

  }

}
