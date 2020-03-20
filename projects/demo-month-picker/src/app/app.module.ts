import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { NgMonthPickerModule } from 'ng-month-picker';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgMonthPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
