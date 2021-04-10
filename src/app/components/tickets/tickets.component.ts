import { Component, OnInit,ViewChild } from '@angular/core';
import {FormsModule,NgForm,FormGroup,NgModel} from '@angular/forms';
import { TabsetComponent, TabDirective } from 'ngx-bootstrap/tabs';
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
        //alert("Found");
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
  

  //Tabs
  @ViewChild('tabset') tabset: TabsetComponent;

  ngAfterViewInit(){
    console.log(this.tabset.tabs);
  }

  //booked(bookedForm:NgForm):void{
    //this.id=bookedForm.value.uid;
    
  //}
}
