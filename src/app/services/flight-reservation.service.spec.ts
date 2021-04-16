import { TestBed } from '@angular/core/testing';

import { FlightReservationService } from './flight-reservation.service';

describe('FlightReservationService', () => {
  let service: FlightReservationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightReservationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
