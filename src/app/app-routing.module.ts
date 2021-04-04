import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { EditFlightComponent } from './components/edit-flight/edit-flight.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component'
  
const routes: Routes = [
  {path:'AdminLogin',component:AdminLoginComponent},
  {path:'UserLogin',component:UserLoginComponent},
  { path: 'EditFlight', component: EditFlightComponent },
  { path: 'homepage', component: HomeComponent },
  { path: 'registration', component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
