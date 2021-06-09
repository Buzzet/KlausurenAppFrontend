import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Klausur, KlausurenControllerService} from 'projects/klausuren-api/src';
import { Observable } from 'rxjs';
import {DropDownSelection} from '../../modules/drop-down-selection';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-klausur',
  templateUrl: './view-klausur.component.html',
  styleUrls: ['./view-klausur.component.css'],
})
export class ViewKlausurComponent implements OnInit {

  validInput = false;
  dropDownSelection: DropDownSelection;
  disableYear = true;
  yearList = [];
  selectedYear: string;
  klausurID: string;
  klausuren: Klausur[];
  constructor(private router: Router, private klausurenAPI: KlausurenControllerService) {}




  ngOnInit(): void {
  }

  onSelectionDone($event: DropDownSelection): void{
    this.dropDownSelection = $event;
    this.klausurenAPI.getAllKlausurenByStudiengangAndSemesterAndModul(this.dropDownSelection.studiengang,
      this.dropDownSelection.semester, this.dropDownSelection.modul)
    .subscribe(value => {
      this.klausuren = value;
      value.forEach(klausur => {
        this.yearList.push(klausur.jahr);
      });
    });
    this.disableYear = false;
  }


  getKlausur(): void{
    const idArray = this.klausuren.filter(value => value.jahr === this.selectedYear);
    const id = idArray[0].id;
    this.router.navigate(['klausuren/klausur'], {queryParams: {id}});
  }


  selectionChanged($event: string): void {
    this.validInput = true;
    this.selectedYear = $event;
  }
}
