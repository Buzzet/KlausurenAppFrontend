import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'klausur-input',
  templateUrl: './klausur-input.component.html',
  styleUrls: ['./klausur-input.component.css']
})
export class KlausurInputComponent implements OnInit {

  @Input()
  label: string;

  inputValue: string;

  @Output()
  value = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
