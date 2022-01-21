import { TestBed } from '@angular/core/testing';

import { GuiaBlockGuard } from './guia-block.guard';

describe('GuiaBlockGuard', () => {
  let guard: GuiaBlockGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuiaBlockGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
