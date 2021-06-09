import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {DropDownSelection} from '../../modules/drop-down-selection';

@Component({
  selector: 'klausur-input-selection',
  templateUrl: './klausur-input-selection.component.html',
  styleUrls: ['./klausur-input-selection.component.css']
})
export class KlausurInputSelectionComponent implements OnInit {

  constructor() { }
  dropDownSelection: DropDownSelection = {studiengang: '', modul: '', semester: 0};
  semesterList: number[] = [1, 2, 3, 4, 5, 6, 7];
  studiengang: string;
  semester: string;
  modul: string;
  @Output()
  output: EventEmitter<DropDownSelection> = new EventEmitter<DropDownSelection>();

  setStudiengang($event: string): void{
    this.studiengang = $event;
    this.dropDownSelection.studiengang = $event;
    this.submitList();
  }
  setSemester($event: string): void{
    this.dropDownSelection.semester = + $event;
    this.submitList();
  }
  setModul($event: string): void{
    this.dropDownSelection.modul = $event;
    this.submitList();
  }
  ngOnInit(): void {
  }

  submitList(): void{
    if (this.dropDownSelection.modul !== '' &&
      this.dropDownSelection.semester !== 0 && this.dropDownSelection.studiengang !== ''){
      this.output.emit(this.dropDownSelection);
    }
  }

}
