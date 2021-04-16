import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { EditFlightComponent } from './components/edit-flight/edit-flight.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component'
import { FlightselectComponent } from './components/flightselect/flightselect.component';
import { PassengerdetailsComponent } from './components/passengerdetails/passengerdetails.component';
<<<<<<< HEAD
import { PaymentComponent } from './components/payment/payment.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import{AboutpageComponent} from './components/aboutpage/aboutpage.component';
import{FaqComponent} from './components/faq/faq.component';

=======
import { PaymentComponent } from './components/payment/payment.component'
import { TicketsComponent } from './components/tickets/tickets.component'
import { SeatSelectComponent } from './components/seat-select/seat-select.component';
import { BookingComponent } from './components/booking/booking.component';
>>>>>>> 97a2e00498b3fffe24a0dfdd8ce95707a336e8bb

const routes: Routes = [
  {path:'AdminLogin', component: AdminLoginComponent},
  {path:'UserLogin', component: UserLoginComponent},
  {path:'EditFlight', component: EditFlightComponent },
  {path:'homepage', component: HomeComponent },
  //{path:'registration', component: RegistrationComponent },
  {path:'InsertUser', component: RegistrationComponent },
  {path:'FlightSelect', component: FlightselectComponent},
 // {path:'PassDet', component: PassengerdetailsComponent},
  {path:'Passenger_Details', component: PassengerdetailsComponent},
  {path:'PaymentForm', component: PaymentComponent},
  {path:'TicketDetails', component: TicketsComponent},
<<<<<<< HEAD
  {path:'About',component:AboutpageComponent},
  {path:'FAQ',component:FaqComponent}
=======
  {path:'SeatSelect', component:SeatSelectComponent},
  {path:'Booking',component:BookingComponent}
>>>>>>> 97a2e00498b3fffe24a0dfdd8ce95707a336e8bb
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
