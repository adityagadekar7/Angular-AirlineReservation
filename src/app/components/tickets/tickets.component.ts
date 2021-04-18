import { Component, OnInit,ViewChild } from '@angular/core';
import {FormsModule,NgForm,FormGroup,NgModel} from '@angular/forms';
import { TabsetComponent, TabDirective } from 'ngx-bootstrap/tabs';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { CancellationInfoModule } from 'src/app/modules/cancellation-info/cancellation-info.module';
import { FlightInfoModule } from 'src/app/modules/flight-info/flight-info.module';
import { TicketInfoModule } from 'src/app/modules/ticket-info/ticket-info.module';
import { BookingInfoService } from 'src/app/services/booking-info.service';
import { TicketInfoService } from 'src/app/services/ticket-info.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
 
})
export class TicketsComponent implements OnInit {
  svc:TicketInfoService;
  svc1:BookingInfoService;
  databooked:TicketInfoModule;
  datacancelled:TicketInfoModule;
  booked:TicketInfoModule[];
  cancelled:TicketInfoModule[];
  id:number;
  model:any=[];
  pnr:number;
  datapnr:TicketInfoModule;
  ticketbypnr=new TicketInfoModule();
  cancelbooked=new CancellationInfoModule();
  bookedlist:TicketInfoModule[];
  SeatsToRemove:string;
  Flight_Number:number;
  test:string="";
  UpdateCancelledSeats1:string="";
  reserved:string[] = [];
  dataflight:FlightInfoModule;
  flightdata=new FlightInfoModule();
  CompareTime:number;

  constructor(svc:TicketInfoService, svc1:BookingInfoService) 
  {
    this.svc=svc;
    this.svc1=svc1;
  }

  ngOnInit(): void {
    this.id=Number(localStorage.getItem('UID'));
    this.svc.GetBookedTickets(this.id).subscribe((databooked:TicketInfoModule[])=>{
      this.booked=databooked;
      this.bookedlist=databooked //ddl
      if(this.booked==null){
        alert("No Booked Tickets");
      }
      else{
        console.log(databooked);
      }
    });

    this.svc.GetCancelledTickets(this.id).subscribe((datacancelled:TicketInfoModule[])=>{
      this.cancelled=datacancelled;
      if(this.cancelled==null){
        alert("No Cancelled tickets");
      }
      else{
        console.log(datacancelled);
      }
    });  
  }

  WithoutTime(dateTime){
    var date=new Date(dateTime);
    date.setHours(0,0,0,0);
    return date;
  }

  removeValue = function(SeatsToRemove) {
    //separator = ",";
    var values = SeatsToRemove.split(",");
    console.log(values);
    for(var i = 0 ; i < this.reserved.length ; i++) {
        //console.log(this.reserved[i]);
        for(var j = 0 ; j < values.length ; j++){
            //console.log(values[j]);
            if(this.reserved[i]==values[j]) {
              this.reserved.splice(i, 1);
            }
        //return this.reserved.join(",");
        }
    }
    this.UpdateCancelledSeats1=this.reserved.join(",")
    console.log(this.reserved);
    console.log(this.UpdateCancelledSeats1)
    this.svc.UpdateCancelledSeats(this.Flight_Number,this.UpdateCancelledSeats1).subscribe((data1:TicketInfoModule)=>{
      console.log("Reached");
    });
    //return this.reserved;
  }
  



  CancelFunction(cancelForm:NgForm):void{
    this.pnr=cancelForm.value.tno;
    
    //Get Booked Ticket by pnr
    this.svc.GetBookedTicketByPnr(this.pnr).subscribe((datapnr:TicketInfoModule)=>{
      //console.log(datapnr.Pnr_no);
      this.ticketbypnr=datapnr;
      if(this.ticketbypnr==null)
      {
        alert("Invalid PNR");
      }
      else{
        console.log(datapnr);
      }

      console.log("Hello Flight Number: "+datapnr.Flight_Number);

      // this.svc.GetFlightByFlightNumber(datapnr.Flight_Number).subscribe((dataflight:FlightInfoModule)=>{
      //   this.flightdata=dataflight;
      //   console.log("Test time"+this.flightdata.Flight_Departing_Time);
      //   console.log("Test Date"+this.flightdata.Flight_Date);
      // });

      this.svc.CompareTicketTime(datapnr.Flight_Number).subscribe((dataflight:number)=>{
        this.CompareTime=dataflight;
        console.log(this.CompareTime);
        if(this.CompareTime==0){
          alert("Cannot be cancelled");
        }
        else  //if ticket can be cancelled
        {
          
          var time=new Date().toLocaleTimeString('it-IT');

          this.Flight_Number=datapnr.Flight_Number;
          alert("Test: "+this.Flight_Number);

          this.cancelbooked.Pnr_no=datapnr.Pnr_no; 
          this.cancelbooked.User_id=datapnr.User_Id;
          this.cancelbooked.Dateofcancellation=this.WithoutTime(Date()).toDateString();
          this.cancelbooked.timeofcancellation=time;
          this.cancelbooked.Refund_Amount=1000;
          this.cancelbooked.Status="Successful";
          console.log(this.cancelbooked);

          this.svc.CancelInsertTicket(this.cancelbooked).subscribe((datac:boolean)=>{
            alert(datac);
            if(datac==true)
            {
              alert("Added to Cancellation table");
            }
          });

          this.ticketbypnr.status='Cancelled';
      
          this.svc.UpdateBookedTickets(this.pnr,this.ticketbypnr).subscribe((data:boolean)=>{
            alert(data);
            if(data==true){
              alert("Update Successful"); 
              //---------To remove cancelled seats----------//
              this.svc1.GetSeats(this.Flight_Number).subscribe((data:string)=>{
                this.test=data;
                console.log(this.test);
                this.reserved = this.test.split(","); 
                console.log(this.reserved);
                //this.removeValue("H3,H4,H5")
                this.SeatsToRemove=this.ticketbypnr.Seats;
                this.removeValue(this.SeatsToRemove);
              });
              //-------------------//
            }
            else{
              alert("Update Failed");
            }
          });//UpdateBookedTicket Ends here

        }
      });
      
      

      

        //console.log(this.Flight_Number);

        
    });  //GetBookedTicketBypnr Ends here


  
  }//Function End

  //Tabs
  @ViewChild('tabset') tabset: TabsetComponent;
  ngAfterViewInit(){
    console.log(this.tabset.tabs);
  }
}
