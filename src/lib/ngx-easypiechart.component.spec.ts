import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEasypiechartComponent } from './ngx-easypiechart.component';

describe('NgxEasypiechartComponent', () => {
  let component: NgxEasypiechartComponent;
  let fixture: ComponentFixture<NgxEasypiechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxEasypiechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxEasypiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
