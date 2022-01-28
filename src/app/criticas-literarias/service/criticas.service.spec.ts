import { TestBed } from '@angular/core/testing';

import { CriticasService } from './criticas.service';

describe('CriticasService', () => {
  let service: CriticasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriticasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
