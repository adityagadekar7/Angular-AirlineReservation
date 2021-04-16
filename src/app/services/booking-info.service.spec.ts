import { TestBed } from '@angular/core/testing';

import { BookingInfoService } from './booking-info.service';

describe('BookingInfoService', () => {
  let service: BookingInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
