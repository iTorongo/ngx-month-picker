import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { NgxMonthPickerModule } from 'ngx-month-picker';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxMonthPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
