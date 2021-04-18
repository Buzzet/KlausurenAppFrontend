import { TestBed } from '@angular/core/testing';

import { EMailControllerService } from './e-mail-controller.service';

describe('EMailControllerService', () => {
  let service: EMailControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EMailControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
