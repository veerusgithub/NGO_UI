import { TestBed } from '@angular/core/testing';

import { EditEmployeeResolver } from './edit-employee.resolver';

describe('EditEmployeeResolver', () => {
  let resolver: EditEmployeeResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(EditEmployeeResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
