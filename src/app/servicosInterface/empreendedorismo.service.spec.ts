import { TestBed } from '@angular/core/testing';

import { EmpreendedorismoService } from './empreendedorismo.service';

describe('EmpreendedorismoService', () => {
  let service: EmpreendedorismoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpreendedorismoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
