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
<<<<<<< HEAD
  //url:string='http://localhost:56797/api/RegisterAU/Login'; //localhost port different for different projects
=======
 // url:string='http://localhost:56797/api/RegisterAU/Login'; //localhost port different for different projects
>>>>>>> 5061301d588a01460f2c44f6446f582f5ff15ea2
  //url:string='http://localhost:62227/api/RegisterAU';
  //url:string='http://localhost:62227/api/Registration';
  url:string='http://localhost:59875/api/RegisterAU';
  
  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

  constructor(http:HttpClient) {this.http=http }
  Login(UserId: number, pwd: string): Observable<string>
  {
    return this.http.get<string>(this.url + '/' + 'Login' + '/' + UserId + '/' + pwd); 

  }

  UserReg(regau: ResgisterauModule): Observable<boolean> 
  {
    return this.http.post<boolean>(this.url + '/' + 'register', regau, this.httpOptions);//use based on your link
  }/*
  ChkEmail(email: string): Observable<string> {
    return this.http.get<string>(this.url + '/CheckEmail/' + email + '/');
  }

  VerifyLinkEmail(reg: ResgisterauModule): Observable<string> {
    console.log(reg);
    return this.http.post<string>(this.url + '/' + 'VerifyLinkEmail', reg, this.httpOptions);
  }*/

}
