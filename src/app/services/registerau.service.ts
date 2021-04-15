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
  url:string='http://localhost:56797/api/RegisterAU'; //localhost port different for different projects
  //url:string='http://localhost:62227/api/RegisterAU';
  //url:string='http://localhost:62227/api/Registration';
  //url:string='http://localhost:59875/api/RegisterAU';
  
  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

  constructor(http:HttpClient) {this.http=http ;}
  Login(UserId: number, pwd: string): Observable<string>
  {
    return this.http.get<string>(this.url + '/' + 'Login' + '/' + UserId + '/' + pwd); 

  }

  UserReg(regau: ResgisterauModule): Observable<boolean> 
  {
    return this.http.post<boolean>(this.url + '/' + 'InsertUser', regau, this.httpOptions);//use based on your link
  }

}
