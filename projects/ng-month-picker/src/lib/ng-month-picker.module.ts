import { NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ClickOutsideDirective } from './click-outside.directive';

import { NgMonthPickerComponent } from './ng-month-picker.component';

@NgModule({
  declarations: [NgMonthPickerComponent, ClickOutsideDirective],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [NgMonthPickerComponent]
})
export class NgMonthPickerModule { }
