import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { EditFlightComponent } from './components/edit-flight/edit-flight.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component'
import { FlightselectComponent } from './components/flightselect/flightselect.component';
import { PassengerdetailsComponent } from './components/passengerdetails/passengerdetails.component';
import { PaymentComponent } from './components/payment/payment.component'
<<<<<<< HEAD
import { TicketsComponent } from './components/tickets/tickets.component'
import { SeatSelectComponent } from './components/seat-select/seat-select.component';
import { BookingComponent } from './components/booking/booking.component';
=======
import { TicketsComponent } from './components/tickets/tickets.component';
//import { ResetpasswordComponent } from 'src/app/components/resetpassword/resetpassword.component';
>>>>>>> 849e7d04483a40dd4401d60ea1184ea7a94b7897

const routes: Routes = [
  {path:'AdminLogin', component: AdminLoginComponent},
  {path:'UserLogin', component: UserLoginComponent},
  {path:'EditFlight', component: EditFlightComponent },
  {path:'homepage', component: HomeComponent },
  {path:'registration', component: RegistrationComponent },
  {path:'FlightSelect', component: FlightselectComponent},
  {path:'PassDet', component: PassengerdetailsComponent},
  {path:'PaymentForm', component: PaymentComponent},
<<<<<<< HEAD
  {path:'TicketDetails', component: TicketsComponent},
  {path:'SeatSelect', component:SeatSelectComponent},
  {path:'Booking',component:BookingComponent}
=======
  { path: 'TicketDetails', component: TicketsComponent }
 // { path: 'resetpassword', component: ResetpasswordComponent }
>>>>>>> 849e7d04483a40dd4401d60ea1184ea7a94b7897
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
