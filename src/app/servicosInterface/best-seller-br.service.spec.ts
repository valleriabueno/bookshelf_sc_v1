import { TestBed } from '@angular/core/testing';

import { BestSellerBrService } from './best-seller-br.service';

describe('BestSellerBrService', () => {
  let service: BestSellerBrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BestSellerBrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
