import { NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ClickOutsideDirective } from './click-outside.directive';

import { NgxMonthPickerComponent } from './ngx-month-picker.component';

@NgModule({
  declarations: [NgxMonthPickerComponent, ClickOutsideDirective],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [NgxMonthPickerComponent]
})
export class NgxMonthPickerModule { }
