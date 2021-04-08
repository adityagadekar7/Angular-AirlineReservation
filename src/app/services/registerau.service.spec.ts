import { TestBed } from '@angular/core/testing';

import { RegisterauService } from './registerau.service';

describe('RegisterauService', () => {
  let service: RegisterauService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterauService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
