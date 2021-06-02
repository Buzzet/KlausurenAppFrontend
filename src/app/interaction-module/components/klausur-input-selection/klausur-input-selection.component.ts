import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'klausur-input-selection',
  templateUrl: './klausur-input-selection.component.html',
  styleUrls: ['./klausur-input-selection.component.css']
})
export class KlausurInputSelectionComponent implements OnInit {

  constructor() { }
  studiengang: string;
  semester: string;
  modul: string;
  setStudiengang($event: string): void{
    this.studiengang = $event;
  }
  setSemester($event: string): void{
    this.semester = $event;
  }
  setModul($event: string): void{
    this.modul = $event;
  }
  ngOnInit(): void {
  }

}
