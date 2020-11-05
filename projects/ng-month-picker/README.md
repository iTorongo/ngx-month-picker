# ng-month-picker

`ng-month-picker` is a simple month picker for angular application.

## Features
* Simple layout
* Enable/disable form control
* Can be used as an angular form control
* Customize functionality
* Support for angular version 10

## Installation

* `npm install ng-month-picker --save`

## Usage

* `import { NgMonthPickerModule } from 'ng-month-picker';`

* add `NgMonthPickerModule` to the imports of your NgModule

```ts
// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { NgMonthPickerModule } from 'ng-month-picker';

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
