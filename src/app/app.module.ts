import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneNotebookComponent } from './phone-notebook/phone-notebook.component';
import { PhoneNotebookService } from './phone-notebook.service';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    PhoneNotebookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, AgGridModule.withComponents([])
  ],
  providers: [PhoneNotebookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
