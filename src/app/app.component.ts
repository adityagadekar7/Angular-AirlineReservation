import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import{RegisterauService}from 'src/app/services/registerau.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular-AirlineReservation';
 FirstName:string;
 LastName:string;
  constructor(private service:RegisterauService){}

  public loginstatus$:Observable<boolean>;
  logout()
  {
    sessionStorage.clear();
    this.service.loginstatus.next(false); 
  }
  ngOnInit(): void {
    this.loginstatus$ = this.service.isLoggedin;
    this.FirstName=sessionStorage.getItem('FIRSTNAME');
    this.LastName=sessionStorage.getItem('LASTNAME');
  }

}
