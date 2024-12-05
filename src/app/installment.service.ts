import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InstallmentService {
  private apiUrl = 'http://localhost:3000';

  private installmentsSubject = new BehaviorSubject<any[]>([]);
  installments$ = this.installmentsSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Carregar parcelas da API
  loadInstallments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/installments`);  // Substitua pela URL real
  }

  // Atualiza as parcelas carregadas
  setInstallments(installments: any[]): void {
    this.installmentsSubject.next(installments);
  }
}
