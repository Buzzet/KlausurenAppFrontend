import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { KlausurenControllerService } from 'projects/klausuren-api/src';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-klausur',
  templateUrl: './view-klausur.component.html',
  styleUrls: ['./view-klausur.component.css'],
})
export class ViewKlausurComponent implements OnInit {

  validInput = false;
  constructor() {}




  ngOnInit(): void {
  }



  getKlausur(): void{

  }


}
