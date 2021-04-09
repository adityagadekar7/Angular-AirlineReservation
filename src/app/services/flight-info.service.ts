import { Injectable } from '@angular/core';
//added
import{HttpClient} from '@angular/common/http';
import{Observer} from 'rxjs';
import{FlightInfoModule} from '../modules/flight-info/flight-info.module';
import{Observable} from 'rxjs/internal/Observable';
import{HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FlightInfoService {

  fs:FlightInfoModule;
  http:HttpClient;
  url:string='http://localhost:62227/api/Flight_Schedules'; //localhost port different for different projects
  //url:string='http://localhost:56797/api/Flight_Schedules';


  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
  };
  constructor(http: HttpClient) {this.http=http; }

  InsertNewFlight(fs:FlightInfoModule):Observable<boolean>  //emp: declared above
{
 return this.http.post<boolean>(this.url+"/"+'InsertFlight',fs,this.httpOptions); //passing 1 parameter   //httpOptions beacause FormBody used in WebApi(studio 2019) --passed through body not uri
}

DeleteFlightF(id:number):Observable<boolean>
{
  return this.http.delete<boolean>(this.url+'/'+'DeleteFlight'+'/'+id);
}

}
