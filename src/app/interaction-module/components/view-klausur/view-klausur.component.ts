import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { KlausurenControllerService } from 'projects/klausuren-api/src';
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
  constructor(private router: Router) {}




  ngOnInit(): void {
  }

  onSelectionDone($event: DropDownSelection): void{
    this.validInput = true;
    this.dropDownSelection = $event;
  }


  getKlausur(): void{
    const id = '60b7fb9aa12a95109252f4e5';
    this.router.navigate(['klausur'], {queryParams: {id}});
  }


}
