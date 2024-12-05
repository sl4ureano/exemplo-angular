import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-installment-modal',
  templateUrl: './installment-modal.component.html',
  styleUrls: ['./installment-modal.component.scss'],
})
export class InstallmentModalComponent {
  @Input() installments: { id: number; month: string; value: number }[] = [];
  @Output() selectedInstallments = new EventEmitter<{ id: number; month: string; value: number }[]>();

  selectedOption: number | null = null;

  selectInstallmentOption(option: number) {
    this.selectedOption = option;
  }

  confirmSelection() {
    if (this.selectedOption === 1) {
      this.selectedInstallments.emit([this.installments[0]]);
    } else if (this.selectedOption === 2) {
      this.selectedInstallments.emit(this.installments.slice(0, 2));
    }
  }
}
