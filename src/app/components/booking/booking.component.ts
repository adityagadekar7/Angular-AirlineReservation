import { Component, OnInit } from '@angular/core';
import {FormsModule,NgForm,FormGroup,NgModel} from '@angular/forms';
import { PassengerInfoModule } from 'src/app/modules/passenger-info/passenger-info.module';
import { TicketInfoModule } from 'src/app/modules/ticket-info/ticket-info.module';
import { PassengerInfoService } from 'src/app/services/passenger-info.service';
import { TicketInfoService } from 'src/app/services/ticket-info.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  svc:TicketInfoService;
  ti= new TicketInfoModule();
  svc1:PassengerInfoService;
  pi= new PassengerInfoModule();
  i:number;

  datapnr:TicketInfoModule;


  test:number;

  
  constructor(svc:TicketInfoService,svc1:PassengerInfoService) { 
    this.svc=svc;
    this.svc1=svc1;
  }

  ngOnInit(): void {
  }

  WithoutTime(dateTime){
    var date=new Date(dateTime);
    date.setHours(0,0,0,0);
    return date;
  }

  Insert(insertForm:NgForm):void{
    var time=new Date().toLocaleTimeString('it-IT');

    this.ti.Flight_Number=1;
    this.ti.User_Id=1;
    this.ti.Reservation_Date=this.WithoutTime(Date()).toDateString();
    //this.ti.Reservation_Date="2021-05-04";
    this.ti.Reservation_Time=time;
    //this.ti.Reservation_Time="10.05.00"
    this.ti.num_of_Seats=4;
    this.ti.Classtype="Eco";
    this.ti.total_price=this.ti.num_of_Seats* 5000;
    this.ti.status="Success";
    //console.log("Hello"+this.ti.total_price);

    
    this.svc.InsertFlightRes(this.ti).subscribe((data:boolean)=>{
      if(data == true){
        alert('Added to Flight Reservation');
      }
    });

  }

  GetPnr(GetPnrForm:NgForm):void{
    // this.svc.GetLatestPnr().subscribe((datapnr:TicketInfoModule)=>{
    //   alert("Reached")
    //   console.log(datapnr);
    // });
    // this.test=1;
    // this.svc.GetPnrbyId(this.test).subscribe((datapnr:TicketInfoModule)=>{
    //   console.log(datapnr);
    // });
    //--------------------------------
    
     this.svc.GetPnr().subscribe((datapnr:number)=>{
       this.test=datapnr;
       console.log(this.test);
     

     this.pi.Pnr_no=this.test;
     console.log(this.pi.Pnr_no);
    this.pi.PassportNumber="1234"
    this.pi.FirstName="test"
    this.pi.LastName="All"
    this.pi.DOB="11/11/2000"
    this.pi.Gender="Male"
    this.pi.PhoneNumber=1231231232
    this.pi.CovidCertificate="Yes"
    console.log(this.pi);
    
    for(this.i=0;this.i<this.ti.num_of_Seats;this.i++)
    {
      this.svc.InsertPassengerDet(this.pi).subscribe((data:boolean)=>{
        alert(data);
        if(data == true){
          alert('Added to Passenger Details');
        }
      });

    }
   
     });
  
  

  }

}
