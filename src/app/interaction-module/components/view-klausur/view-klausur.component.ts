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

  constructor(public klausurenApi: KlausurenControllerService) {}

  studiengang$: Observable<any>;
  semester$: Observable<any>;
  moduls$: Observable<any>;
  currentStudiengang: string;
  currentSemester: number;

  ngOnInit(): void {
    this.studiengang$ = this.klausurenApi.getAllStudiengaenge();
  }

  getSemester($event): void{
    this.currentStudiengang = $event;
    this.semester$ = this.klausurenApi.getAllSemestersByStudiengang($event);
  }

  getKlausur(): void{

  }

  getModuls($event: string): void {
    console.log('Neuer Wert in Semester: ' + $event);
    this.currentSemester = +$event;
    this.moduls$ = this.klausurenApi.getAllModuleByStudiengangAndSemester(this.currentStudiengang, this.currentSemester);
  }}
