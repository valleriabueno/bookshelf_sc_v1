import { TestBed } from '@angular/core/testing';

import { PsicologiaService } from './psicologia.service';

describe('PsicologiaService', () => {
  let service: PsicologiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PsicologiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
