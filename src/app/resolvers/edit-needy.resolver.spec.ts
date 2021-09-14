import { TestBed } from '@angular/core/testing';

import { EditNeedyResolver } from './edit-needy.resolver';

describe('EditNeedyResolver', () => {
  let resolver: EditNeedyResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(EditNeedyResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
