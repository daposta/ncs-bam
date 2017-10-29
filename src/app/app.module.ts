import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NewForm41Component } from './components/new-form-41/new-form-41.component';
import { NewPaymentComponent } from './components/new-payment/new-payment.component';
import { PaymentsListingComponent } from './components/payments-listing/payments-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  
    NewForm41Component,
    NewPaymentComponent,
    PaymentsListingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
