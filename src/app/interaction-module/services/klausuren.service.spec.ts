import { TestBed } from '@angular/core/testing';

import { KlausurenService } from './klausuren.service';

describe('KlausurenService', () => {
  let service: KlausurenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KlausurenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
