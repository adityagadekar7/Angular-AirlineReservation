import { Component, OnInit,ViewChild } from '@angular/core';
import {FormsModule,NgForm,FormGroup,NgModel} from '@angular/forms';
import { TabsetComponent, TabDirective } from 'ngx-bootstrap/tabs';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { CancellationInfoModule } from 'src/app/modules/cancellation-info/cancellation-info.module';
import { TicketInfoModule } from 'src/app/modules/ticket-info/ticket-info.module';
import { TicketInfoService } from 'src/app/services/ticket-info.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
 
})
export class TicketsComponent implements OnInit {
  svc:TicketInfoService;
  databooked:TicketInfoModule;
  datacancelled:TicketInfoModule;
  //tick=new TicketInfoModule();
  booked:TicketInfoModule[];
  cancelled:TicketInfoModule[];
  id:number;
  model:any=[];
  pnr:number;

  datapnr:TicketInfoModule;
  ticketbypnr=new TicketInfoModule();

  //datapnr:TicketInfoModule[];
  cancelbooked=new CancellationInfoModule();


  constructor(svc:TicketInfoService) 
  {
    this.svc=svc;
  }

  ngOnInit(): void {
    this.id=Number(localStorage.getItem('UID'));
    this.svc.GetBookedTickets(this.id).subscribe((databooked:TicketInfoModule[])=>{
      this.booked=databooked;
      if(this.booked==null){
        alert("Invalid ID");
      }
      else{
        console.log(databooked);
      }
    });



    this.svc.GetCancelledTickets(this.id).subscribe((datacancelled:TicketInfoModule[])=>{
      this.cancelled=datacancelled;
      if(this.cancelled==null){
        alert("Invalid ID");
      }
      else{
        console.log(datacancelled);
        alert("Found");
      }
    });

    

    
  }

  WithoutTime(dateTime){
    var date=new Date(dateTime);
    date.setHours(0,0,0,0);
    return date;
  }
  
  CancelFunction(cancelForm:NgForm):void{
    this.pnr=cancelForm.value.tno;
    
    //Get Booked Ticket by pnr
    this.svc.GetBookedTicketByPnr(this.pnr).subscribe((datapnr:TicketInfoModule)=>{
      this.ticketbypnr=datapnr;
      //if(this.ticketbypnr==null){
      //  alert("Invalid PNR");
      //}
      //else{
        console.log(datapnr);
        
        alert("12346789654");
      //}
      var time=new Date().toLocaleTimeString('it-IT');

    this.cancelbooked.Pnr_no=datapnr.Pnr_no; 
    this.cancelbooked.User_id=datapnr.User_Id;
    this.cancelbooked.Dateofcancellation=this.WithoutTime(Date()).toDateString();
    this.cancelbooked.timeofcancellation=time;
    this.cancelbooked.Refund_Amount=1000;
    this.cancelbooked.Status="Successful";
    
    console.log(this.cancelbooked);
    //alert("Reached");

    this.svc.CancelInsertTicket(this.cancelbooked).subscribe((datac:boolean)=>{
      alert(datac);
      if(datac==true){
        alert("Added to Cancellation table");
      }
    });

    this.ticketbypnr.status='Cancelled'
    this.svc.UpdateBookedTickets(this.pnr,this.ticketbypnr).subscribe((data:boolean)=>{
      alert(data);
      if(data==true){
        alert("Update Successful");
      }
      else{
        alert("Update Failed");
      }
    });

    // this.svc.CancelDeleteTicket(this.pnr).subscribe((datad:boolean)=>{
    //   alert(datad);
    //   console.log(datad);
    // });

  });

  }

  //Tabs
  @ViewChild('tabset') tabset: TabsetComponent;

  ngAfterViewInit(){
    console.log(this.tabset.tabs);
  }

  //booked(bookedForm:NgForm):void{
    //this.id=bookedForm.value.uid;
    
  //}
}
