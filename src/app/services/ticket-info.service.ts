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
  url:string='http://localhost:59875/api/Dashboard';    //User Login Dashboard
  url1:string='http://localhost:59875/api/Booking';     //Book tickets
 
  //url:string='http://localhost:62227/api/Dashboard'
  //url:string='http://localhost:56797/api/Dashboard'
  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
  };
  constructor(http:HttpClient) {this.http=http; }

  //-------------To get booked tickets by id------------UserDashboard(TicketsComponent)---------------//
  GetBookedTickets(id:number):Observable<TicketInfoModule[]>{
    return this.http.get<TicketInfoModule[]>(this.url+'/GetBookedTickets/'+id);
  }

  //-----------------get Psg Details By pnr-------------------------//
  GetPsgDetailsByPnr(pnr:number):Observable<PassengerInfoModule[]>{
    return this.http.get<PassengerInfoModule[]>(this.url+'/GetPsgDetailsByPnr/'+pnr)
  }

  //----------------Get Cancelled tickets by id--------------------//
  GetCancelledTickets(id:number):Observable<TicketInfoModule[]>{
    return this.http.get<TicketInfoModule[]>(this.url+'/GetCancelledTickets/'+id);
  }

  //--------------------------Cancel Booked--------------------------//
  //To get ticket details of ticket which needs to be cancelled
  GetBookedTicketByPnr(pnr:number):Observable<TicketInfoModule>{
    return this.http.get<TicketInfoModule>(this.url+'/GetBookedTicketByPnr/'+pnr);
  }
  //TO insert in cancelled table
  CancelInsertTicket(ct:CancellationInfoModule):Observable<boolean>
  {
    return this.http.post<boolean>(this.url+'/InsertInCancelled',ct,this.httpOptions);
  }
  //--to change status to cancel
  UpdateBookedTickets(pnr:number,ti:TicketInfoModule):Observable<boolean>
  {
  return this.http.put<boolean>(this.url+'/'+'UpdateBookedTickets'+'/'+ pnr,ti,this.httpOptions); //passing 2 parameters
  }

  //Get Flight details by flight number
GetFlightByFlightNumber( Flight_Number:number):Observable<FlightInfoModule>{
  return this.http.get<FlightInfoModule>(this.url+'/GetFlightByFlightNumber/'+Flight_Number)
}

//Check time for cancellation
CompareTicketTime(Flight_Number:number):Observable<number>{
  return this.http.get<number>(this.url+'/CompareTicketTime/'+Flight_Number);
}

//Remove seats from flight schedules because ticket is cancelled
UpdateCancelledSeats(Flight_Number:number,Seats:string):Observable<boolean>
  {
    return this.http.post<boolean>(this.url+'/UpdateCancelledSeats/'+Flight_Number+'/'+Seats ,this.httpOptions);
  }
//---------------------------------------------------------------------------------------//



  //--------------------------------Booking-------------------------------------------//

  //To insert booking details
InsertFlightRes(ti:TicketInfoModule):Observable<boolean>  
{
 return this.http.post<boolean>(this.url1+"/"+'InsertFlightReservation',ti,this.httpOptions); //passing 1 parameter   //httpOptions beacause FormBody used in WebApi(studio 2019) --passed through body not uri
}

//To insert passenger details
InsertPassengerDet(pi:PassengerInfoModule):Observable<boolean>  
{
 return this.http.post<boolean>(this.url1+"/"+'InsertPassengerDetails',pi,this.httpOptions); //passing 1 parameter   //httpOptions beacause FormBody used in WebApi(studio 2019) --passed through body not uri
}

// To get pnr of ticket
GetPnr():Observable<number>
{
  return this.http.get<number>(this.url1+'/GetPnr');
}



}
