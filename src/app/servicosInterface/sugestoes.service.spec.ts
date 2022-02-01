import { TestBed } from '@angular/core/testing';

import { SugestoesService } from './sugestoes.service';

describe('SugestoesService', () => {
  let service: SugestoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SugestoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
