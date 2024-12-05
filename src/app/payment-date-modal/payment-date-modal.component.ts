import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-payment-date-modal',
  templateUrl: './payment-date-modal.component.html',
  styleUrls: ['./payment-date-modal.component.scss'],
})
export class PaymentDateModalComponent {
  @Input() holidays: string[] = []; // Recebe os feriados do componente pai
  @Output() selectedDate = new EventEmitter<Date>(); // Emite a data selecionada

  constructor(private business: BusinessService) {}

  selectToday() {
    const today = new Date();
    if (this.business.isBusinessDay(today, this.holidays)) {
      this.selectedDate.emit(today);
    } else {
      alert('Hoje não é um dia útil.');
    }
  }

  selectNextBusinessDay() {
    const nextBusinessDay = this.business.getNextBusinessDay(new Date(), this.holidays);
    this.selectedDate.emit(nextBusinessDay);
  }
}
