import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { EditFlightComponent } from './components/edit-flight/edit-flight.component';
  
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {  AlertModule } from 'ngx-bootstrap/alert';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FlightselectComponent } from './components/flightselect/flightselect.component';
import { PassengerdetailsComponent } from './components/passengerdetails/passengerdetails.component';

import{PaymentComponent} from './components/payment/payment.component';
import{TicketsComponent} from './components/tickets/tickets.component';

import { NgxCaptchaModule } from 'ngx-captcha';


import 'jquery';
import 'popper.js';
import 'bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { SeatSelectComponent } from './components/seat-select/seat-select.component';
import { BookingComponent } from './components/booking/booking.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';




@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserLoginComponent,
    EditFlightComponent,
    HomeComponent,
    RegistrationComponent,
    FlightselectComponent,
    PassengerdetailsComponent,
    PaymentComponent,
    TicketsComponent,
    ResetpasswordComponent,
    

    SeatSelectComponent,
    BookingComponent,
    ResetpasswordComponent

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    AlertModule.forRoot(), TabsModule.forRoot(),
    HttpClientModule,
    NgxCaptchaModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
