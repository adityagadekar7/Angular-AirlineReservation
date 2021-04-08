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
  url:string='http://localhost:56797/api/RegisterAU/Login'; //localhost port different for different projects
  
  
  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

  constructor(http:HttpClient) {this.http=http }
  Login(name: string, pwd: string): Observable<string>
  {
    return this.http.get<string>(this.url + '/' + 'Login' + '/' + name + '/' + pwd); 
  
  }
  User_Registration(p: ResgisterauModule): Observable<boolean> {
    return this.http.post<boolean>(this.url + '/' + 'Registration', p, this.httpOptions);

  }

}
