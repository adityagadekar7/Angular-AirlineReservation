import { Injectable } from '@angular/core';
//added
import{HttpClient} from '@angular/common/http';
import{Observer} from 'rxjs';
import{Observable} from 'rxjs/internal/Observable';
import{HttpHeaders} from '@angular/common/http';
import {ResgisterauModule} from '../modules/resgisterau/resgisterau.module'; 
import{Router} from '@angular/router';

import { fakeAsync } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterauService {

  regau: ResgisterauModule; 
  http:HttpClient;
<<<<<<< HEAD
 
  public loginstatus = new BehaviorSubject<boolean>((sessionStorage.length!=0)?true:false);

  get isLoggedin()
  {
    return this.loginstatus.asObservable();
  }

  //url:string='http://localhost:62227/api/RegisterAU';
 //url:string='http://localhost:62227/api/Registration';
 //url:string='http://localhost:56797/api/Registration';
=======
  
  //url:string='http://localhost:62227/api/RegisterAU';
 //url:string='http://localhost:62227/api/Registration';
>>>>>>> 25bf8504612467404ab0a7e5c14c5722e3fbb88b
  url:string='http://localhost:59875/api/RegisterAU';

  
  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

  constructor(http:HttpClient) {this.http=http ;}
<<<<<<< HEAD

  

=======
>>>>>>> 25bf8504612467404ab0a7e5c14c5722e3fbb88b
  Login(UserId: number, pwd: string): Observable<string>
  {
    return this.http.get<string>(this.url + '/' + 'Login' + '/' + UserId + '/' + pwd); 

  }

  UserReg(regau: ResgisterauModule): Observable<boolean> 
  {
    return this.http.post<boolean>(this.url + '/' + 'register', regau, this.httpOptions);//use based on your link
  }
  ChkEmail(email: string): Observable<string> {
    return this.http.get<string>(this.url + '/CheckEmail/' + email+ '/' );
  }

  VerifyLinkEmail(stud: ResgisterauModule): Observable<string> {
    console.log(stud);
    return this.http.post<string>(this.url + '/' + 'VerifyLinkEmail', stud, this.httpOptions);
  }
  SetNewPassword(stud: ResgisterauModule): Observable<boolean> {
    console.log("Inside SetNewPassword " + stud)
    return this.http.post<boolean>(this.url + '/' + 'SetNewPassword', stud, this.httpOptions);
  }
<<<<<<< HEAD
  checkphone(phonenumber: number): Observable<string> {
    return this.http.get<string>(this.url + '/checkphone/' + phonenumber + '/');
  }
=======
>>>>>>> 25bf8504612467404ab0a7e5c14c5722e3fbb88b

}
