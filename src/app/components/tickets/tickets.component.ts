import { Component, OnInit,ViewChild } from '@angular/core';
import {FormsModule,NgForm,FormGroup,NgModel} from '@angular/forms';
import { TabsetComponent, TabDirective } from 'ngx-bootstrap/tabs';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { CancellationInfoModule } from 'src/app/modules/cancellation-info/cancellation-info.module';
import { FlightInfoModule } from 'src/app/modules/flight-info/flight-info.module';
import { PassengerInfoModule } from 'src/app/modules/passenger-info/passenger-info.module';
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
  dataPsg:PassengerInfoModule;
  datacancelled:TicketInfoModule;
  booked:TicketInfoModule[];
  bookedPsg:PassengerInfoModule[];
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
  RefundAmount:number;
  SelectedDate:Date;

  constructor(svc:TicketInfoService, svc1:BookingInfoService) 
  {
    this.svc=svc;
    this.svc1=svc1;
  }

  ngOnInit(): void {
    //this.id=Number(localStorage.getItem('UID'));
    this.id=Number(sessionStorage.getItem('UID'));
    console.log("TEST: "+this.id)

    //----------------Booked tickets for that id when page reloads------------------//
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

    //----------------Cancelled tickets for that id when page reloads------------------//
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

  //-----------------Remove time from date-------------------//
  WithoutTime(dateTime){
    var date=new Date(dateTime);
    date.setHours(0,0,0,0);
    return date;
  }

  //--------To Remove Cancelled Seats from Flights Schedules----------------//
  removeValue = function(SeatsToRemove) {
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
  
  //-----------------------To get passenger details-----------------------//
  PsgDetailsFunction(pnr):void{
    this.svc.GetPsgDetailsByPnr(pnr).subscribe((dataPsg:PassengerInfoModule[])=>{
      this.bookedPsg=dataPsg;
      console.log(this.bookedPsg);
      if(this.booked==null){
        alert("No Booked Tickets");
      }
      else{
        console.log(dataPsg);
      }
    });
  }

  convertToInt(val):number{return parseInt(val);}   //Used to convert Refund amount to int
//------------------------------Cancel Booking------------------------------------------------//
  CancelFunction(cancelForm:NgForm):void{
    this.pnr=cancelForm.value.tno;
    console.log(this.pnr);
    
    //----------------Get Booked Ticket by pnr-------------------------//
    this.svc.GetBookedTicketByPnr(this.pnr).subscribe((datapnr:TicketInfoModule)=>{
      //console.log(datapnr.Pnr_no);
      this.ticketbypnr=datapnr;
      console.log(datapnr);
      console.log(this.ticketbypnr);
      if(this.ticketbypnr==null)
      {
        alert("Invalid PNR");
      }
      else{
        console.log(datapnr);
      }
      console.log("Hello Flight Number: "+datapnr.Flight_Number);

      //----------------------Compare Ticket Time(Check for less than 3 hours)------------------------------------//
      this.svc.CompareTicketTime(datapnr.Flight_Number).subscribe((dataflight:number)=>{
        this.CompareTime=dataflight;
        console.log(this.CompareTime);
        if(this.CompareTime==0){
          alert("Cannot be cancelled now");
        }
        else  //if ticket can be cancelled
        {
          this.SelectedDate=new Date(datapnr.Flight_Date)
          if(this.SelectedDate<new Date())
          {
            alert("Cannot be cancelled now")
          }
          else
          {
          var time=new Date().toLocaleTimeString('it-IT');
          this.Flight_Number=datapnr.Flight_Number;
          ///alert("Test: "+this.Flight_Number);
          this.RefundAmount=datapnr.total_price/2;
          this.cancelbooked.Pnr_no=datapnr.Pnr_no; 
          this.cancelbooked.User_id=datapnr.User_Id;
          this.cancelbooked.Dateofcancellation=this.WithoutTime(Date()).toDateString();
          this.cancelbooked.timeofcancellation=time;
          this.cancelbooked.Refund_Amount=this.convertToInt(this.RefundAmount) ;
          this.cancelbooked.Status="Successful";
          console.log(this.cancelbooked);

          //--------------------To insert in Cancelled Table-------------------//
          this.svc.CancelInsertTicket(this.cancelbooked).subscribe((datac:boolean)=>{
            alert(datac);
            if(datac==true)
            {
              alert("Added to Cancellation table");
            }
          });

          this.ticketbypnr.status='Cancelled';
          console.log(this.ticketbypnr.status);
      
          //--------------Change Status to cancelled-----------------------//
          this.svc.UpdateBookedTickets(this.pnr,this.ticketbypnr).subscribe((data:boolean)=>{
            //console.log("HellLLO");
            console.log(this.pnr);
            //alert(data);
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
                this.removeValue(this.SeatsToRemove);  //to remove seats
              });
              //-------------------//
            }
            else{
              alert("Update Failed");
            }
          });//UpdateBookedTicket Ends here
        }

        }
      });     
    });  //GetBookedTicketBypnr Ends here  
  }//Function End

  //Tabs
  @ViewChild('tabset') tabset: TabsetComponent;
  ngAfterViewInit(){
    console.log(this.tabset.tabs);
  }
}