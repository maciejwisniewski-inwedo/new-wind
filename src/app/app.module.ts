import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Table3Component } from './components/table3/table3.component';
import { ProjectIconComponent } from './app/icons/project-icon/project-icon.component';
import { FilterPanelComponent } from './components/filter-panel/filter-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    Table3Component,
    ProjectIconComponent,
    FilterPanelComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
