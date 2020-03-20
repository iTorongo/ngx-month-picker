# ngx-month-picker

`ngx-month-picker` is a simple month picker for angular application.

## Features
* Simple layout
* Enable/disable form control
* Can be used as an angular form control
* Customize functionality

## Installation

* `npm install ngx-month-picker --save`

## Usage

* `import { NgxMonthPickerModule } from 'ngx-month-picker';`

* add `NgxMonthPickerModule` to the imports of your NgModule

```ts
// app.module.ts
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
```

And you are good to go...

Use it in your anywhere in your application

````
<ngx-month-picker [(ngModel)]="currentMonth"></ngx-month-picker>
````
