import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HolidayService {
  private apiUrl = 'http://localhost:3000';

  private holidaysSubject = new BehaviorSubject<any[]>([]);
  holidays$ = this.holidaysSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Carregar feriados da API
  loadHolidays(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/holidays`);
  }

  // Atualiza os feriados carregados
  setHolidays(holidays: any[]): void {
    this.holidaysSubject.next(holidays);
  }
}
