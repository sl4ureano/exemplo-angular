import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PaymentComponent } from './payment/payment.component';
import { HttpClientModule } from '@angular/common/http';
import { PaymentDateModalComponent } from './payment-date-modal/payment-date-modal.component';
import { InstallmentModalComponent } from './installment-modal/installment-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PaymentComponent,
    PaymentDateModalComponent,
    InstallmentModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
