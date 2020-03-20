import { TestBed } from '@angular/core/testing';

import { NgMonthPickerService } from './ng-month-picker.service';

describe('NgMonthPickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgMonthPickerService = TestBed.get(NgMonthPickerService);
    expect(service).toBeTruthy();
  });
});
