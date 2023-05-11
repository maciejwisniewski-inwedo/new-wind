import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Table3Component } from './table3/table3.component';
import { ProjectIconComponent } from './app/icons/project-icon/project-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    Table3Component,
    ProjectIconComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
