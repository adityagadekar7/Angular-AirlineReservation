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
<<<<<<< HEAD
  //url:string='http://localhost:62227/api/City_Information';
  //url:string='http://localhost:56797/api/City_Information';
 url:string='http://localhost:59875/api/City_Information'
=======
  url:string='http://localhost:62227/api/City_Information';
  //url:string='http://localhost:56797/api/City_Information';
  //url:string='http://localhost:59875/api/City_Information'
>>>>>>> 5061301d588a01460f2c44f6446f582f5ff15ea2
  

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
