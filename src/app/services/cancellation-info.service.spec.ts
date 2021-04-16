import { TestBed } from '@angular/core/testing';

import { CancellationInfoService } from './cancellation-info.service';

describe('CancellationInfoService', () => {
  let service: CancellationInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CancellationInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
