import { TestBed, inject } from '@angular/core/testing';

import { NgxEasypiechartService } from './ngx-easypiechart.service';

describe('NgxEasypiechartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxEasypiechartService]
    });
  });

  it('should be created', inject([NgxEasypiechartService], (service: NgxEasypiechartService) => {
    expect(service).toBeTruthy();
  }));
});
