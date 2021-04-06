import { TestBed } from '@angular/core/testing';

import { VaccineGuard } from './vaccine.guard';

describe('VaccineGuard', () => {
  let guard: VaccineGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VaccineGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
