import { Injectable } from '@angular/core';
//added
import{HttpClient} from '@angular/common/http';
import{Observer} from 'rxjs';
import{Observable} from 'rxjs/internal/Observable';
import{HttpHeaders} from '@angular/common/http';
import { TicketInfoModule } from '../modules/ticket-info/ticket-info.module';
import { CancellationInfoModule } from '../modules/cancellation-info/cancellation-info.module';
import { PassengerInfoModule } from '../modules/passenger-info/passenger-info.module';
import { FlightInfoModule } from '../modules/flight-info/flight-info.module';
@Injectable({
  providedIn: 'root'
})
export class BookingInfoService {
  http:HttpClient;
  url:string='http://localhost:59875/api/Booking' 

  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
  };
  constructor(http:HttpClient) {this.http=http; }
  
  GetSeats(Flight_Number:number):Observable<string>{
    return this.http.get<string>(this.url+'/GetSeats/'+Flight_Number);
  }

  UpdateSeats(Flight_Number:number,Seats:string,Pnr_no:number):Observable<boolean>{
    return this.http.post<boolean>(this.url+'/UpdateSeats/'+Flight_Number+'/'+Seats+'/'+Pnr_no,this.httpOptions);
  }

  GetFlights( Flight_Name:string, Flight_Date:string, Origin:string, Destination:string):Observable<FlightInfoModule>{
    return this.http.get<FlightInfoModule>(this.url+'/GetFlights/'+Flight_Name+'/'+Flight_Date+'/'+Origin+'/'+Destination)
  }

  GetFlights1( Flight_Name:string, Flight_Date:string, Origin:string, Destination:string):Observable<FlightInfoModule>{
    return this.http.get<FlightInfoModule>(this.url+'/GetFlights1/'+Flight_Name+'/'+Flight_Date+'/'+Origin+'/'+Destination)
  }

  
}
