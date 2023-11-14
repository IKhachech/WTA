import { TestBed } from '@angular/core/testing';

import { WtaTourService } from './wta-tour.service';

describe('WtaTourService', () => {
  let service: WtaTourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WtaTourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
