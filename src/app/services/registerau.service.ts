import { Injectable } from '@angular/core';
//added
import{HttpClient} from '@angular/common/http';
import{Observer} from 'rxjs';
import{Observable} from 'rxjs/internal/Observable';
import{HttpHeaders} from '@angular/common/http';
import {ResgisterauModule} from '../modules/resgisterau/resgisterau.module'; 

@Injectable({
  providedIn: 'root'
})
export class RegisterauService {

  regau: ResgisterauModule; 
  http:HttpClient;
  url: string ='http://localhost:62227/api/Registration'; //localhost port different for different projects
  
  
  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

  constructor(http:HttpClient) {this.http=http }
  Login(name: string, pwd: string): Observable<string>
  {
    return this.http.get<string>(this.url + '/' + 'Login' + '/' + name + '/' + pwd); 
  
  }
  register(p: ResgisterauModule): Observable<boolean> {
    return this.http.post<boolean>(this.url + '/' + 'register ', p, this.httpOptions);

  }

}
