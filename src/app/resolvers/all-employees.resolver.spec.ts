import { TestBed } from '@angular/core/testing';

import { AllEmployeesResolver } from './all-employees.resolver';

describe('AllEmployeesResolver', () => {
  let resolver: AllEmployeesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AllEmployeesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
