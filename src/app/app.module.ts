import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpModule,  Http } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NewForm41Component } from './components/new-form-41/new-form-41.component';
import { NewPaymentComponent } from './components/new-payment/new-payment.component';
import { PaymentsListingComponent } from './components/payments-listing/payments-listing.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterExciseTraderComponent } from './components/register-excise-trader/register-excise-trader.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';




const appRoutes: Routes = [
  
    // { path: '', component: ProfileComponent, },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterExciseTraderComponent },
    

  
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  
    NewForm41Component,
    NewPaymentComponent,
    PaymentsListingComponent,
    SidebarComponent,
    NavComponent,
    FooterComponent,
    RegisterExciseTraderComponent,
    ForgotPasswordComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule,BrowserAnimationsModule,
      RouterModule.forRoot(appRoutes, {})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
