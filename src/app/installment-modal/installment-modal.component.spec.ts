import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallmentModalComponent } from './installment-modal.component';

describe('InstallmentModalComponent', () => {
  let component: InstallmentModalComponent;
  let fixture: ComponentFixture<InstallmentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstallmentModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstallmentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
