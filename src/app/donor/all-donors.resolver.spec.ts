import { TestBed } from '@angular/core/testing';

import { AllDonorsResolver } from './all-donors.resolver';

describe('AllDonorsResolver', () => {
  let resolver: AllDonorsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AllDonorsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
