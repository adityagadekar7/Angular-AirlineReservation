import { Injectable } from '@angular/core';
//added
import{HttpClient} from '@angular/common/http';
import{Observer} from 'rxjs';
import{Observable} from 'rxjs/internal/Observable';
import{HttpHeaders} from '@angular/common/http';
import {PaymentModule} from '../modules/payment/payment.module'; 

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  payment:PaymentModule
  http:HttpClient;
  url:string='http://localhost:59875/api/Dashboard';
  //url:string='http://localhost:62227/api/Dashboard';
  //url:string='http://localhost:56797api/Dashboard';
 
  
  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

  constructor(http:HttpClient) {this.http=http }

//-----------To check if card Exists in db---------------//
CheckPayment( UserId:Number,CardNo:bigint,cardtype:string,Expiry_Month:number,Expiry_year:number):Observable<PaymentModule[]>
  {
    return this.http.get<PaymentModule[]>(this.url+'/'+'PaymentCheck'+'/'+UserId+'/'+CardNo + '/' + cardtype+'/' + Expiry_Month + '/' + Expiry_year);
  }


//-------------To insert New card------------------//
InsertCard(uid:number,payment:PaymentModule):Observable<boolean>
{
  return this.http.post<boolean>(this.url + '/' + 'EnterPayment/'+uid,payment, this.httpOptions);
}

//---------------TO deduct Amount--------------------//
AlterBalance(Cardno:bigint,Balance:number):Observable<boolean>
{
  return this.http.put<boolean>(this.url+'/AlterBalance/'+Cardno+'/'+Balance,this.httpOptions);
}
}