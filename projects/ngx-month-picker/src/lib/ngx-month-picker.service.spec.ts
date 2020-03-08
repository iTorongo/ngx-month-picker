import { TestBed } from '@angular/core/testing';

import { NgxMonthPickerService } from './ngx-month-picker.service';

describe('NgxMonthPickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxMonthPickerService = TestBed.get(NgxMonthPickerService);
    expect(service).toBeTruthy();
  });
});
