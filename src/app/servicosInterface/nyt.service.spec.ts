import { TestBed } from '@angular/core/testing';

import { NytService } from './nyt.service';

describe('NytService', () => {
  let service: NytService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NytService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
