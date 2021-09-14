import { TestBed } from '@angular/core/testing';

import { AllNeedysResolver } from './all-needys.resolver';

describe('AllNeedysResolver', () => {
  let resolver: AllNeedysResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AllNeedysResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
