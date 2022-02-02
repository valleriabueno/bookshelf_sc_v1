import { TestBed } from '@angular/core/testing';

import { TeatroService } from './teatro.service';

describe('TeatroService', () => {
  let service: TeatroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeatroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
