import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table3',
  templateUrl: './table3.component.html',
})
export class Table3Component implements OnInit {
  dropDownList = 0;

  constructor() {}

  ngOnInit(): void {}

  toggleDropDownList() {
    this.dropDownList = this.dropDownList === 1 ? 0 : 1;
  }
}
