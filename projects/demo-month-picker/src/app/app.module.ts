import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { NgxMonthPickerModule } from 'ngx-month-picker';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxMonthPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
