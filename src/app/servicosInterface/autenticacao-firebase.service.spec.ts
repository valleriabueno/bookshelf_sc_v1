import { TestBed } from '@angular/core/testing';

import { AutenticacaoFirebaseService } from './autenticacao-firebase.service';

describe('AutenticacaoFirebaseService', () => {
  let service: AutenticacaoFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticacaoFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
