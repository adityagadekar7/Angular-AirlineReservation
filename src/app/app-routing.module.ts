import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { EditFlightComponent } from './components/edit-flight/edit-flight.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component'
import { FlightselectComponent } from './components/flightselect/flightselect.component';
import { PassengerdetailsComponent } from './components/passengerdetails/passengerdetails.component';
import{AboutpageComponent} from './components/aboutpage/aboutpage.component';
import{FaqComponent} from './components/faq/faq.component';

import { PaymentComponent } from './components/payment/payment.component'
import { TicketsComponent } from './components/tickets/tickets.component';
import { ResetpasswordComponent } from 'src/app/components/resetpassword/resetpassword.component';

import { SeatSelectComponent } from './components/seat-select/seat-select.component';
import { BookingComponent } from './components/booking/booking.component';

const routes: Routes = [
  {path:'AdminLogin', component: AdminLoginComponent},
  {path:'UserLogin', component: UserLoginComponent},
  {path:'EditFlight', component: EditFlightComponent },
  {path:'homepage', component: HomeComponent },
  {path:'registration', component: RegistrationComponent },
  
  {path:'FlightSelect', component: FlightselectComponent},


<<<<<<< HEAD
  {path:'Passenger_Details', component: PassengerdetailsComponent},
  {path:'PaymentForm', component: PaymentComponent},
  {path:'TicketDetails', component: TicketsComponent},
  {path:'About',component:AboutpageComponent},
  {path:'FAQ',component:FaqComponent},
=======
  {path:'PassDet', component: PassengerdetailsComponent},
  {path:'PaymentForm', component: PaymentComponent},
>>>>>>> 25bf8504612467404ab0a7e5c14c5722e3fbb88b
  { path: 'TicketDetails', component: TicketsComponent },
 { path: 'resetpassword', component: ResetpasswordComponent },
 
  {path:'SeatSelect', component:SeatSelectComponent},
  {path:'Booking',component:BookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
