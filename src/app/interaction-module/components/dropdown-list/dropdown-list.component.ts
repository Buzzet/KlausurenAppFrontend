import {Component, Input, OnInit} from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
