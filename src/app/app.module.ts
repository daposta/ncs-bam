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
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './components/register/register.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { PaymentsListingComponent } from './components/payments-listing/payments-listing.component';
import { PaymentDetailComponent } from './components/payment-detail/payment-detail.component';
import { LicenceDetailComponent } from './components/licence-detail/licence-detail.component';
import { ApplicationsListingComponent } from './components/applications-listing/applications-listing.component';
import { LicencesListingComponent } from './components/licences-listing/licences-listing.component';
import { EntrysOfPremiseListingComponent } from './components/entrys-of-premise-listing/entrys-of-premise-listing.component';
import { EntrysOfPremiseDetailComponent } from './components/entrys-of-premise-detail/entrys-of-premise-detail.component';
import { ExciseTraderDetailComponent } from './components/excise-trader-detail/excise-trader-detail.component';
import { ExciseTradersListingComponent } from './components/excise-traders-listing/excise-traders-listing.component';
import { DutiesListingComponent } from './components/duties-listing/duties-listing.component';
import { UcaListingComponent } from './components/uca-listing/uca-listing.component';
import { UcaDetailComponent } from './components/uca-detail/uca-detail.component';
import { DutyDetailComponent } from './components/duty-detail/duty-detail.component';
import { RegisterAsAdminComponent } from './components/register-as-admin/register-as-admin.component';
import { ZonesListingComponent } from './components/zones-listing/zones-listing.component';
import { NewZoneComponent } from './components/new-zone/new-zone.component';
import { NewForm41UploadsComponent } from './components/new-form-41-uploads/new-form-41-uploads.component';




const appRoutes: Routes = [
  
     { path: '', component: MyProfileComponent, },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
     { path: 'register-as-admin', component: RegisterAsAdminComponent },
     { path: 'forgot-password', component: ForgotPasswordComponent },
     { path: 'new-form-41', component: NewForm41Component },
      { path: 'new-form-41-uploads', component: NewForm41UploadsComponent },
     { path: 'licences', component: LicencesListingComponent },
    { path: 'payments', component: PaymentsListingComponent },
    { path: 'duties', component: DutiesListingComponent },
     { path: 'ucas', component: UcaListingComponent },
      { path: 'applications', component: ApplicationsListingComponent },
      { path: 'zones', component: ZonesListingComponent },
      { path: 'new-zone', component: NewZoneComponent },

  
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewForm41Component,
    NewPaymentComponent,
    SidebarComponent,
    NavComponent,
    FooterComponent,
    ForgotPasswordComponent,
    HomeComponent,
    UserProfileComponent,
    HeaderComponent,
    RegisterComponent,
    MyProfileComponent,
    PaymentsListingComponent,
    PaymentDetailComponent,
    LicenceDetailComponent,
    ApplicationsListingComponent,
    LicencesListingComponent,
    EntrysOfPremiseListingComponent,
    EntrysOfPremiseDetailComponent,
    ExciseTraderDetailComponent,
    ExciseTradersListingComponent,
    DutiesListingComponent,
    UcaListingComponent,
    UcaDetailComponent,
    DutyDetailComponent,
    RegisterAsAdminComponent,
    ZonesListingComponent,
    NewZoneComponent,
    NewForm41UploadsComponent,
 
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule,BrowserAnimationsModule,
      RouterModule.forRoot(appRoutes, {})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
