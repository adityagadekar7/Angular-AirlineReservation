import { Injectable } from '@angular/core';
//added
import{HttpClient} from '@angular/common/http';
import{Observer} from 'rxjs';
import{CityInfoModule} from '../modules/city-info/city-info.module';
import{Observable} from 'rxjs/internal/Observable';
import{HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityInfoService {
  city:CityInfoModule;
  http:HttpClient;
  //url:string='http://localhost:62227/api/City_Information';
<<<<<<< HEAD
  //url:string='http://localhost:56797/api/City_Information';
 url:string='http://localhost:59875/api/City_Information'
=======
 // url:string='http://localhost:56797/api/City_Information';
 // url:string='http://localhost:59875/api/City_Information'
  url:string='http://localhost:62227/api/City_Information';
  //url:string='http://localhost:56797/api/City_Information';
  //url:string='http://localhost:59875/api/City_Information'
>>>>>>> 1fc133a50e16e72a7d1d8dbc107cf17d91fe6fbf
  

  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
  };
  constructor(http:HttpClient) {this.http=http; }

  GetCity():Observable<CityInfoModule[]>
  {
    return this.http.get<CityInfoModule[]>(this.url+'/'+'GetCity');
  }
}
