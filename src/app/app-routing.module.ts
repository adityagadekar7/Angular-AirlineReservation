import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { EditFlightComponent } from './components/edit-flight/edit-flight.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import{PaymentComponent}from './components/payment/payment.component';

const routes: Routes = [
  {path:'AdminLogin',component:AdminLoginComponent},
  {path:'UserLogin',component:UserLoginComponent},
  {path:'EditFlight',component:EditFlightComponent},
  {path:'payment',component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
