import { TestBed } from '@angular/core/testing';

import { CityInfoService } from './city-info.service';

describe('CityInfoService', () => {
  let service: CityInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
