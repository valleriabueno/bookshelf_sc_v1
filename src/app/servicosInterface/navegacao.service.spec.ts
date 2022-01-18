import { TestBed } from '@angular/core/testing';

import { NavegacaoService } from './navegacao.service';

describe('NavegacaoService', () => {
  let service: NavegacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavegacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
