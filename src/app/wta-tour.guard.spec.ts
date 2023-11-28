import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { wtaTourGuard } from './wta-tour.guard';

describe('wtaTourGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => wtaTourGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
