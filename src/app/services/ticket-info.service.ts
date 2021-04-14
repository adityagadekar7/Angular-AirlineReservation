import { Injectable } from '@angular/core';

//added
import{HttpClient} from '@angular/common/http';
import{Observer} from 'rxjs';
import{Observable} from 'rxjs/internal/Observable';
import{HttpHeaders} from '@angular/common/http';
import { TicketInfoModule } from '../modules/ticket-info/ticket-info.module';


@Injectable({
  providedIn: 'root'
})
export class TicketInfoService {
  //tick:TicketInfoModule;
  http:HttpClient;
  //url:string='http://localhost:62227/api/Dashboard'
  url:string='http://localhost:59875/api/Dashboard'
  //url:string='http://localhost:56797/api/Dashboard'
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

}
