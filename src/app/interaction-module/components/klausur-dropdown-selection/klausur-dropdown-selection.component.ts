import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {KlausurenControllerService} from '../../../../../projects/klausuren-api/src';

@Component({
  selector: 'klausur-dropdown-selection',
  templateUrl: './klausur-dropdown-selection.component.html',
  styleUrls: ['./klausur-dropdown-selection.component.css']
})
export class KlausurDropdownSelectionComponent implements OnInit {

  constructor(public klausurenApi: KlausurenControllerService) { }
  studiengang$: Observable<any>;
  semester$: Observable<any>;
  moduls$: Observable<any>;
  currentStudiengang: string;
  currentSemester: number;
  @Output()
  validInput = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.studiengang$ = this.klausurenApi.getAllStudiengaenge();
  }
  getSemester($event): void{
    this.currentStudiengang = $event;
    this.semester$ = this.klausurenApi.getAllSemestersByStudiengang($event);
  }
  getModuls($event: string): void {
    console.log('Neuer Wert in Semester: ' + $event);
    this.currentSemester = +$event;
    this.moduls$ = this.klausurenApi.getAllModuleByStudiengangAndSemester(this.currentStudiengang, this.currentSemester);
  }
}
