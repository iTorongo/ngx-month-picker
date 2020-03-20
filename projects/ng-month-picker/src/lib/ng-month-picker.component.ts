import { Component, OnInit, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';
import * as momentImported from 'moment';
const moment = momentImported;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ng-month-picker',
  templateUrl: './ng-month-picker.component.html',
  styleUrls: ['./ng-month-picker.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NgMonthPickerComponent,
    multi: true
  }],
})

export class NgMonthPickerComponent implements OnInit, ControlValueAccessor  {


  /**
   * Default input class
   */
  @Input() inputClass = 'form-control';

  /**
   * Input display format
   */
  @Input() displayFormat = 'YYYY/MM';

  /**
   * Input value format
   */
  @Input() valueFormat = 'YYYY-MM';

  /**
   * Is read only input
   */
  @Input() isReadOnly = true;

  /**
   * Show calendar icon
   */
  @Input() showIcon = true;

  /**
   * Is control invalid
   */
  @Input() isInvalid = false;

  /**
   * Open month picker flag
   */
  isOpen = false;

  /**
   * Months array
   */
  months: any[] = [];

  /**
   * Selected year
   */
  selectedYear: any;

  /**
   * Selected month
   */
  selectedMonth: any;

  /**
   * Display value to show in input
   */
  displayValue: any;

  /**
   * Value to be sent in form control
   */
  controlValue: any;

  onChange: any = () => {};

  onTouch: any = () => {};

  /**
   * Constructor
   */
  constructor() { }

  /**
   * @ignore
   */
  ngOnInit() {
    this.selectedYear = parseInt(moment().format('YYYY'), 10);
    this.generateMonths();
  }

  writeValue(value) {
    if (value) {
      this.displayValue = moment(value).format(this.displayFormat);
      this.controlValue = moment(value).format(this.valueFormat);
      this.setSelectedYearMonth();
      this.onChange(this.controlValue);
      this.onTouch(this.controlValue);
    } else {
      this.onChange(null);
      this.onTouch(null);
    }
  }

  /**
   * Register on change value
   * @param fn
   */
  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  /**
   * Register on touch value
   * @param fn
   */
  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  /**
   * Select month
   * @param selectedMonth
   */
  selectMonth(selectedMonth) {
    this.selectedMonth = selectedMonth;
    this.setValue();
    this.isOpen = false;
  }

  /**
   * Set selected value to display and form
   */
  setValue() {
    if (this.selectedMonth) {
      this.displayValue = moment(`${this.selectedYear}-${this.selectedMonth}`).format(this.displayFormat);
      this.controlValue = moment(`${this.selectedYear}-${this.selectedMonth}`).format(this.valueFormat);
      this.setSelectedYearMonth();
      this.onChange(this.controlValue);
      this.onTouch(this.controlValue);
    }
  }

  /**
   * On foucus mark as touched
   */
  onFocus() {
    this.onTouch(null);
  }

  /**
   * Open close month picker
   */
  toggle() {
    this.isOpen = !this.isOpen;
  }

  /**
   * Close on click outside month picker
   * @param event
   */
  onClickOutside(event) {
    this.isOpen = false;
    this.setSelectedYearMonth();
  }

  /**
   * Set selected year and selected month
   */
  setSelectedYearMonth() {
    if (this.controlValue) {
      this.selectedYear = moment(this.controlValue).format('YYYY');
      this.selectedMonth = moment(this.controlValue).format('MM');
    }
  }

  /**
   * Increase year
   */
  incrementYear() {
    this.selectedYear++;
  }

  /**
   * Decrease year
   */
  decrementYear() {
    this.selectedYear--;
  }

  /**
   * Generate total number of months
   */
  generateMonths() {
    const months = moment.months().map((month) => {
      const item = {
        value: moment().month(month).format('MM'),
        name: month
      };
      return item;
    });
    this.splitMonths(months, 3);
  }

  /**
   * Create month row array for displaying
   * @param months
   * @param part
   */
  splitMonths(months, part) {
    this.months = [];
    while (months.length > 0) {
      const splittedMonts = months.splice(months, part);
      this.months.push(splittedMonts);
    }
  }

}
