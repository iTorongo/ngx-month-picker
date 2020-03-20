import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMonthPickerComponent } from './ng-month-picker.component';

describe('NgxMonthPickerComponent', () => {
  let component: NgMonthPickerComponent;
  let fixture: ComponentFixture<NgMonthPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMonthPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMonthPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
