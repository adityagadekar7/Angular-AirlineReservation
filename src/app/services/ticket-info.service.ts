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
export class TicketInfoService {
  http:HttpClient;
  url:string='http://localhost:59875/api/Dashboard';
  url1:string='http://localhost:59875/api/Booking';  

  //url:string='http://localhost:62227/api/Dashboard'
  //url:string='http://localhost:62227/api/Dashboard'
  //url:string='http://localhost:56797/api/Dashboard';
  //url1:string='http://localhost:56797/api/Booking'; 

  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
  };
  constructor(http:HttpClient) {this.http=http; }

  GetBookedTickets(id:number):Observable<TicketInfoModule[]>{
    return this.http.get<TicketInfoModule[]>(this.url+'/GetBookedTickets/'+id);
  }

  GetCancelledTickets(id:number):Observable<TicketInfoModule[]>{
    return this.http.get<TicketInfoModule[]>(this.url+'/GetCancelledTickets/'+id);
  }

  //Cancel Booked
  GetBookedTicketByPnr(pnr:number):Observable<TicketInfoModule>{
    return this.http.get<TicketInfoModule>(this.url+'/GetBookedTicketByPnr/'+pnr);
  }
  CancelInsertTicket(ct:CancellationInfoModule):Observable<boolean>
  {
    return this.http.post<boolean>(this.url+'/InsertInCancelled',ct,this.httpOptions);
  }
  UpdateBookedTickets(pnr:number,ti:TicketInfoModule):Observable<boolean>
  {
  return this.http.put<boolean>(this.url+'/'+'UpdateBookedTickets'+'/'+ pnr,ti,this.httpOptions); //passing 2 parameters
  }

  //Booking insert all
InsertFlightRes(ti:TicketInfoModule):Observable<boolean>  
{
 return this.http.post<boolean>(this.url1+"/"+'InsertFlightReservation',ti,this.httpOptions); //passing 1 parameter   //httpOptions beacause FormBody used in WebApi(studio 2019) --passed through body not uri
}

InsertPassengerDet(pi:PassengerInfoModule):Observable<boolean>  
{
 return this.http.post<boolean>(this.url1+"/"+'InsertPassengerDetails',pi,this.httpOptions); //passing 1 parameter   //httpOptions beacause FormBody used in WebApi(studio 2019) --passed through body not uri
}

// InsertPaymentDet(ti:TicketInfoModule):Observable<boolean>  
// {
//  return this.http.post<boolean>(this.url1+"/"+'InsertFlightReservation',ti,this.httpOptions); 
// }
// GetLatestPnr():Observable<TicketInfoModule>
// {
//   return this.http.get<TicketInfoModule>(this.url1+'/'+'GetLatestPnr');
// }

// GetPnrbyId(id:number):Observable<TicketInfoModule>{
//   return this.http.get<TicketInfoModule>(this.url1+'/GetPnrbyId/'+id);
// }
GetFlightByFlightNumber( Flight_Number:number):Observable<FlightInfoModule>{
  return this.http.get<FlightInfoModule>(this.url+'/GetFlightByFlightNumber/'+Flight_Number)
}

CompareTicketTime(Flight_Number:number):Observable<number>{
  return this.http.get<number>(this.url+'/CompareTicketTime/'+Flight_Number);
}

GetPnr():Observable<number>
{
  return this.http.get<number>(this.url1+'/GetPnr');
}

UpdateCancelledSeats(Flight_Number:number,Seats:string):Observable<boolean>
  {
    return this.http.post<boolean>(this.url+'/UpdateCancelledSeats/'+Flight_Number+'/'+Seats ,this.httpOptions);
  }

}
