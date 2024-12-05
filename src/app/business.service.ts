import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BusinessService {
  isBusinessDay(date: Date, holidays: any[]): boolean {
    const day = date.getDay(); // 0 = domingo, 6 = sábado
    
    // Obter a data no formato yyyy-MM-dd (sem o horário)
    const formattedDate = date.toLocaleDateString('en-CA'); // Formato yyyy-MM-dd
    
    console.log('Data formatada:', formattedDate);
  
    // Verifica se é um fim de semana (sábado ou domingo) ou se a data é um feriado
    const isHoliday = holidays.some(holiday => holiday.date === formattedDate);
  
    console.log('É feriado:', isHoliday);
  
    return day !== 0 && day !== 6 && !isHoliday;
  }
  
  
  

  getNextBusinessDay(today: Date, holidays: string[]): Date {
    let nextDay = new Date(today);
    nextDay.setDate(nextDay.getDate() + 1);
    while (!this.isBusinessDay(nextDay, holidays)) {
      nextDay.setDate(nextDay.getDate() + 1);
    }
    return nextDay;
  }
}
