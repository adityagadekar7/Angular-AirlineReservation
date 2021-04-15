import { Injectable } from '@angular/core';
//added
import{HttpClient} from '@angular/common/http';
import{Observer} from 'rxjs';
import{FlightReservationModule} from '../modules/flight-reservation/flight-reservation.module';
import {FlightInfoModule} from '../modules/flight-info/flight-info.module';
import{Observable} from 'rxjs/internal/Observable';
import{HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightReservationService {

  fr : FlightReservationModule;
  http:HttpClient;
  url:string='http://localhost:56797/api';

  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
  };

  constructor(http: HttpClient) {this.http=http; }
 /* GetFlight(id: number):Observable<FlightReservationModule>
  {
    return this.http.get<FlightReservationModule>(this.url + '/Flight_Reservation/' + 'GetFlight' + '/' + id);   
  }*/

  GetFlights():Observable<FlightReservationModule[]>
  {
    return this.http.get<FlightReservationModule[]>(this.url+'/Flight_Schedules/'+'GetFlights');
  }

  /*FlightsReserve(frs1:FlightReservationModule):Observable<boolean>  
{
 return this.http.post<boolean>(this.url+"/"+'Flight_Schedules/'+'InsertFlightReservation',frs1,this.httpOptions); //passing 1 parameter   //httpOptions beacause FormBody used in WebApi(studio 2019) --passed through body not uri
}*/

}