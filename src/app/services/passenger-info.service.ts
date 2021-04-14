import { Injectable } from '@angular/core';
//added
import {HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Observer} from 'rxjs';
import {Observable} from 'rxjs/internal/Observable';
import {PassengerInfoModule} from '../modules/passenger-info/passenger-info.module';

@Injectable({
  providedIn: 'root'
})
export class PassengerInfoService {

  pd : PassengerInfoModule;
  http : HttpClient;
  //url : string = 'http://localhost:56797/api/Passenger_Details';
  url:string='http://localhost:59875/api/Passenger_Details';
  

  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
  };

  constructor(http: HttpClient) {this.http=http; }

  InsertNewPassenger(pd:PassengerInfoModule):Observable<boolean>
  {
    return this.http.post<boolean>(this.url+"/"+'InsertPassengerDetails',pd,this.httpOptions); //httpOptions beacause FormBody used in WebApi(studio 2019) --passed through body not uri
  }

 /* DeletePassenger(id:number):Observable<boolean>
{
  return this.http.delete<boolean>(this.url+'/'+'DeletePassenger'+'/'+id);
}*/

}
