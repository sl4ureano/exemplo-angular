import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { HolidayService } from '../holiday.service';
import { InstallmentService } from '../installment.service';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  holidays: string[] = [];
  installments: { id: number; month: string; value: number }[] = [];
  selectedDate: Date | null = null;
  selectedInstallments: { id: number; month: string; value: number }[] = [];
  totalAmount: number = 0;

  // Controle de modais
  showPaymentDateModal = false;
  showInstallmentModal = false;

  isLoading: boolean = true;

  constructor(private router: Router,
    private holidayService: HolidayService,
    private installmentService: InstallmentService,
    private businessService: BusinessService
  ) {}

  ngOnInit() {
    // Usando forkJoin para aguardar o carregamento de feriados e parcelas
    forkJoin([
      this.holidayService.loadHolidays(),
      this.installmentService.loadInstallments(),
    ]).subscribe({
      next: ([holidaysData, installmentsData]) => {
        this.holidayService.setHolidays(holidaysData);
        this.installmentService.setInstallments(installmentsData);

        this.holidays = holidaysData;
        this.installments = installmentsData;

         // Setando a primeira parcela como default
         if (this.installments.length > 0) {
          this.selectedInstallments = [this.installments[0]];
          this.totalAmount = this.installments[0].value;
        }

        // Usando o BusinessService para definir a data de pagamento padrão
        if(this.holidays.length > 0){
          console.log(this.businessService.isBusinessDay(new Date(),this.holidays))
          if(this.businessService.isBusinessDay(new Date(),this.holidays)){
            this.selectedDate = new Date();
          }else{
            this.selectedDate = this.businessService.getNextBusinessDay(new Date(), this.holidays);
          }
        }
      },
      error: (error) => {
        console.error('Erro ao carregar os dados:', error);
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  // Ações para abrir/fechar modais
  openPaymentDateModal() {
    this.showPaymentDateModal = true;
  }

  closePaymentDateModal() {
    this.showPaymentDateModal = false;
  }

  openInstallmentModal() {
    this.showInstallmentModal = true;
  }

  closeInstallmentModal() {
    this.showInstallmentModal = false;
  }

  // Manipula a data selecionada
  handleDateSelection(date: Date) {
    this.selectedDate = date;
    this.closePaymentDateModal();
  }

  // Manipula as parcelas selecionadas
  handleInstallmentsSelection(installments: { id: number; month: string; value: number }[]) {
    this.selectedInstallments = installments;
    this.totalAmount = installments.reduce((sum, item) => sum + item.value, 0);
    this.closeInstallmentModal();
  }

  // Continua para a próxima etapa
  continue() {
    if (!this.selectedDate || this.selectedInstallments.length === 0) {
      alert('Por favor, selecione uma data e pelo menos uma parcela.');
      return;
    }
  
    // Exibe os dados no console (opcional)
    console.log('Data selecionada:', this.selectedDate);
    console.log('Parcelas selecionadas:', this.selectedInstallments);
    console.log('Total a pagar:', this.totalAmount);
  
    // Redireciona para a página de Payment
    this.router.navigate(['/payment']);
  }
  
}
