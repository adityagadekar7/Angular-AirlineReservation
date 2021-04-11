import { TestBed } from '@angular/core/testing';

import { PassengerInfoService } from './passenger-info.service';

describe('PassengerInfoService', () => {
  let service: PassengerInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassengerInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
