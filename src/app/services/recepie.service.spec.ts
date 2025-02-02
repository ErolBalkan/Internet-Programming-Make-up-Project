import { TestBed } from '@angular/core/testing';

import { RecepieService } from './recepie.service';

describe('RecepieService', () => {
  let service: RecepieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecepieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
