import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDateModalComponent } from './payment-date-modal.component';

describe('PaymentDateModalComponent', () => {
  let component: PaymentDateModalComponent;
  let fixture: ComponentFixture<PaymentDateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentDateModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentDateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
