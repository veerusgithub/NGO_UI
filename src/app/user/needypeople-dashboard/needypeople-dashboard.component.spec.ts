import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedypeopleDashboardComponent } from './needypeople-dashboard.component';

describe('NeedypeopleDashboardComponent', () => {
  let component: NeedypeopleDashboardComponent;
  let fixture: ComponentFixture<NeedypeopleDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeedypeopleDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedypeopleDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
