import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.css']
})
export class FilterPanelComponent implements OnInit {
  filterForm: FormGroup;

  @Output() filterData = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {
    this.filterForm = this.formBuilder.group({
      name: '',
      surname: '',
      age: null
    });
  }

  ngOnInit() {
    this.filterForm.valueChanges
      .pipe(debounceTime(800))
      .subscribe(() => {
        this.applyFilter();
      });
  }

  applyFilter() {
    const filterParams = this.filterForm.value;
    this.filterData.emit(filterParams);
  }
}
