import { TestBed } from '@angular/core/testing';

import { EditDonorResolver } from './edit-donor.resolver';

describe('EditDonorResolver', () => {
  let resolver: EditDonorResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(EditDonorResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
