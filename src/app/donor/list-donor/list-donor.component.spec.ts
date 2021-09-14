import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDonorComponent } from './list-donor.component';

describe('ListDonorComponent', () => {
  let component: ListDonorComponent;
  let fixture: ComponentFixture<ListDonorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDonorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
