import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerDashComponent } from './retailer-dash.component';

describe('RetailerDashComponent', () => {
  let component: RetailerDashComponent;
  let fixture: ComponentFixture<RetailerDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailerDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetailerDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
