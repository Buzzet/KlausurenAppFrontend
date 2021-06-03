import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {C} from '@angular/cdk/keycodes';

@Component({
  selector: 'dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.css']
})
export class DropdownListComponent implements OnInit {

  @Input()
  list: string[];

  @Input()
  placeholder: string;

  @Input()
  disabled: boolean;

  @Output()
  selectionChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  change(event): void{
    this.selectionChanged.emit(event.value);
  }

}
