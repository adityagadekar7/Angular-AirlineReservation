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
<<<<<<< HEAD
  url: string = 'http://localhost:56797/api';
  //url: string = 'http://localhost:62227/api';
=======
  //url: string = 'http://localhost:56797/api';
  //url: string = 'http://localhost:62227/api';
  url:string='http://localhost:59875/api';
>>>>>>> 25bf8504612467404ab0a7e5c14c5722e3fbb88b


  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
  };

  constructor(http: HttpClient) {this.http=http; }
 /* GetFlight(id: number):Observable<FlightReservationModule>
  {
    return this.http.get<FlightReservationModule>(this.url + '/Flight_Reservation/' + 'GetFlight' + '/' + id);   
  }*/

<<<<<<< HEAD
  GetFlights():Observable<FlightReservationModule[]>
  {
    return this.http.get<FlightReservationModule[]>(this.url+'/Flight_Schedules/'+'GetFlights');
  }
=======
  // GetFlights():Observable<FlightReservationModule[]>
  // {
  //   return this.http.get<FlightReservationModule[]>(this.url+'/Flight_Schedules/'+'GetFlights');
  // }

  
>>>>>>> 25bf8504612467404ab0a7e5c14c5722e3fbb88b

}
