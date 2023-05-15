import { Component } from '@angular/core';
import { DataService, IData } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filteredData: IData[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.filteredData = this.dataService.getData();
  }

  applyFilters(filterParams: IData) {
    this.filteredData = this.dataService.getData().filter((item: IData) => filterParams.name && item.name.toLowerCase().includes(filterParams.name) || filterParams.surname && item.surname.toLowerCase().includes(filterParams.surname) || filterParams.age && item.age !== filterParams.age);
  }
}
