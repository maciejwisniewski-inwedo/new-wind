import { Component, OnInit, Input } from '@angular/core';
import { IData } from 'src/app/services/data.service';

@Component({
  selector: 'app-table3',
  templateUrl: './table3.component.html',
  styleUrls: ['./table3.component.css']
})
export class Table3Component {
  @Input() filteredData: IData[] = [];
}
