# ng-month-picker

`ng-month-picker` is a simple month picker for angular application.

## Features
* Simple layout
* Enable/disable form control
* Can be used as an angular form control
* Customize functionality
* Support for angular version 10
* Change date format

## Installation

* `npm install ng-month-picker --save`

## Usage

* `import { NgMonthPickerModule } from 'ng-month-picker';`

* add `NgMonthPickerModule` to the imports of your NgModule

```ts
// app.module.ts
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
```

And you are good to go...

Use it in your anywhere in your application

````
<ng-month-picker [(ngModel)]="currentMonth"></ng-month-picker>
````

Example for template-driven form:

````
// your.component.html
<form (ngSubmit)="onSubmit()" #infoForm="ngForm">
   <input type="text"  name="title" [(ngModel)]="title">
   <ng-month-picker name="month" [(ngModel)]="currentMonth"></ng-month-picker>
   <button type="submit">Submit</button>
</form>
````

Example for reactive form:

````
// your.component.ts
import { FormControl } from '@angular/forms';
export class YourComponent {
  infoForm = new FormGroup({
      title: new FormControl(''),
      currentMonth: new FormControl(null),
    });
}

// your.component.html
<form [formGroup]="infoForm" (ngSubmit)="onSubmit()">
   <input type="text"  name="title" [formControl]="title">
   <ng-month-picker name="month" [formControl]="currentMonth"></ng-month-picker>
   <button type="submit">Submit</button>
</form>
````

## Customization
You can customize by changing the display format as well as value format.

| Inputs        | Are           
| ------------- |:-------------|
| displayFormat   | Type: *string* <br> For changing the display format of date |
| valueFormat     | Type: *string* <br> For changing the value format of date |
| isReadOnly      | Type: *boolean* <br> Default: *true* <br> Readonly recommended. Disable/Enable the input field|
| showIcon        | Type: *boolean* <br> Default: *true* <br> Show/Hide the calendar icon |

Supported display and value format are listed below. You can use **`- / .`** for separating month and year.

[dayjs](https://day.js.org/docs/en/display/format) is used behind the scene for formatiing date

| Format        | Output         | Description           
| ------------- |:-------------:|:-------------:|
| YY       | 20   | Two-digit year |
| YYYY     | 2020 | Four-digit year |
| M       | 1-12   | The month, beginning at 1 |
| MM     | 01-12 | The month, 2-digits |
| MMM       | Jan-Dec   | The abbreviated month name |
| MMMM     | January-December | The full month name |

Example for changing display format and value format:
```
<ng-month-picker [displayFormat]="'MM/YYYY'" [valueFormat]="'MM-YYYY'" [(ngModel)]="currentMonth"></ng-month-picker>

<ng-month-picker [displayFormat]="'MMMM-YY'" [(ngModel)]="currentMonth"></ng-month-picker>

```

