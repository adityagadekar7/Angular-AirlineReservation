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
 
  public loginstatus = new BehaviorSubject<boolean>((sessionStorage.length!=0)?true:false);

  // public recaptachaValiadtion = new BehaviorSubject<boolean>((sessionStorage.length!=0)?true:false);

  get isLoggedin()
  {
    return this.loginstatus.asObservable();
  }

  //url:string='http://localhost:62227/api/RegisterAU';
 //url:string='http://localhost:62227/api/Registration';
 //url:string='http://localhost:56797/api/Registration';
  url:string='http://localhost:59875/api/RegisterAU';

  
  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

  constructor(http:HttpClient) {this.http=http ;}

  //------------To check Login email and password--------------//
  Login(email: string, pwd: string): Observable<string>
  {
    return this.http.get<string>(this.url + '/' + 'Login' + '/' + email + '/' + pwd); 
  }

  //------------To get id of logged in user by email-------------//
  GetIdByEmail(email:string):Observable<ResgisterauModule[]>{
    return this.http.get<ResgisterauModule[]>(this.url+'/GetIdByEmail/'+email+'/');
  }

//---------To insert new user-------------------------------//
  UserReg(regau: ResgisterauModule): Observable<boolean> 
  {
    return this.http.post<boolean>(this.url + '/' + 'register', regau, this.httpOptions);//use based on your link
  }

  //-------------To check if email already exists while registering new user-----------------//
  ChkEmail(email: string): Observable<string> {
    return this.http.get<string>(this.url + '/CheckEmail/' + email+ '/' );
  }

  //--------------Verification link for reset password-------------------//
  VerifyLinkEmail(stud: ResgisterauModule): Observable<string> {
    console.log(stud);
    return this.http.post<string>(this.url + '/' + 'VerifyLinkEmail', stud, this.httpOptions);
  }

  //------------------TO set new Password and encrypt it--------------------//
  SetNewPassword(stud: ResgisterauModule): Observable<boolean> {
    console.log("Inside SetNewPassword " + stud)
    return this.http.post<boolean>(this.url + '/' + 'SetNewPassword', stud, this.httpOptions);
  }

  //-------To check phone number-------------------//
  checkphone(phonenumber: number): Observable<string> {
    return this.http.get<string>(this.url + '/checkphone/' + phonenumber + '/');
  }

}
