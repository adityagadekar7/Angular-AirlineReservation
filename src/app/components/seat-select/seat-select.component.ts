import { Component, OnInit,NgZone, ɵɵtrustConstantResourceUrl } from '@angular/core';
import {FormsModule,FormGroup,NgForm,NgModel} from '@angular/forms';
import{Router} from '@angular/router';
import { TicketInfoModule } from 'src/app/modules/ticket-info/ticket-info.module';
import { BookingInfoService } from 'src/app/services/booking-info.service';
import { TicketInfoService } from 'src/app/services/ticket-info.service';

@Component({
  selector: 'app-seat-select',
  templateUrl: './seat-select.component.html',
  styleUrls: ['./seat-select.component.css']
})
export class SeatSelectComponent implements OnInit {
    svc:BookingInfoService;
    Flight_Number:number;
    Cost:number;
    flag:number;
    ngzone: NgZone;
    router: Router;
    test:string="";
    svc1:TicketInfoService;
    ti= new TicketInfoModule();
    datapnr:TicketInfoModule;
    ticketPrice: number;
    convFee: number;
    totalPrice: number;
    currency: string;
    infantCost:number;
    aci:number;
    count:number=0;
    uid:number;
    

    constructor( svc:BookingInfoService,svc1:TicketInfoService, ngzone:NgZone, router:Router) {
        this.svc=svc;
        this.svc1=svc1;
        this.ngzone=ngzone;
        this.router=router;
    }

    ngOnInit(): void {
        this.Flight_Number = Number(localStorage.getItem('FLIGHTNUMBER'));
        this.Cost = Number(localStorage.getItem('COST'));
        this.flag=Number(localStorage.getItem('FLAG'));
        this.aci=Number(localStorage.getItem('ACI'))
        this.uid=Number(sessionStorage.getItem('UID'))
        //this.Flight_Number=1;
        this.ticketPrice = this.Cost;
        this.infantCost=this.Cost/2;
        this.convFee= this.Cost * 0.18;
        this.currency = "Rs";
        console.log(this.ticketPrice + " "+this.Cost)
        console.log("TESTTTTTT: "+this.Flight_Number+this.Cost);
        console.log(this.uid);

        this.svc.GetSeats(this.Flight_Number).subscribe((data:string)=>{
        this.test=data;
        console.log(this.test);
        this.reserved = this.test.split(","); 
        console.log(this.reserved);
        //this.removeValue("H3,H4,H5")
        
        });

        
        
    }
    
    
    rows: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I','J','K'];
    cols: number[]  = [1, 2, 3, 4, 5, 6];
    
    reserved:string[] = []     //this.test.split(","); 

    //reserved: string[] = ['A2', 'A3', 'F5', 'F1', 'F2','F6', 'H1', 'H2', 'H3', 'H4'];
    selected: string[] = [];

    


    // removeValue = function(cancelled) {
    //     //separator = ",";
    //     var values = cancelled.split(",");
    //     //console.log(values);
    //     for(var i = 0 ; i < this.reserved.length ; i++) {
    //         //console.log(this.reserved[i]);
    //         for(var j = 0 ; j < values.length ; j++){
    //             //console.log(values[j]);
    //             if(this.reserved[i]==values[j]) {
    //               this.reserved.splice(i, 1);
    //         }
          
    //         //return this.reserved.join(",");
    //       }
    //     }
    //     //return this.reserved;
    //   }

    // refresh():void{
    //     console.log("Reached");
    //     console.log(this.test);
    //     this.reserved = this.test.split(","); 
    //     console.log(this.reserved);
    // } 

    //return status of each seat
    getStatus = function(seatPos: string) {
        if(this.reserved.indexOf(seatPos) !== -1) {
            return 'reserved';
        } else if(this.selected.indexOf(seatPos) !== -1) {
            return 'selected';
        }
    }
    //clear handler
    clearSelected = function() {
        this.selected = [];
        this.count=0;
    }
    //click handler
    seatClicked = function(seatPos: string) {
        //console.log(this.test);//--------------------------------------------------------------
        var index = this.selected.indexOf(seatPos);
        
        if(index !== -1){
            // seat already selected, remove
            if(this.count>0){
                this.count--;
                this.selected.splice(index, 1);
            }
        } else {
            //push to selected array only if it is not reserved
            if(this.reserved.indexOf(seatPos) === -1)
                {  
                    if(this.count<this.aci){
                        this.count++;
                        this.selected.push(seatPos);
                    }
                    
                }
                
        }
    }
    //Select button handler
    showSelected = function() {
        if(this.selected.length == this.aci) {
          //alert(this.reserved);
            alert("Selected Seats: " + this.selected + "\nTotal: "+(this.ticketPrice * this.selected.length + this.convFee));
            this.reserved.push(this.selected);
            //this.temp.push(this.selected);
            //alert(this.temp);
            localStorage.setItem('TOTALSEATS',this.selected.length.toString());
            localStorage.setItem('SEATNO',this.selected.toString());
            localStorage.setItem('PRICE',(this.ticketPrice * this.selected.length + this.convFee).toString());
            localStorage.setItem('FLIGHTNO',this.Flight_Number.toString());
            localStorage.setItem('FLAG',this.flag.toString());
            this.ngzone.run(()=>this.router.navigateByUrl('/PassDet'));
            //-------------------------
            var time=new Date().toLocaleTimeString('it-IT');
            this.ti.Flight_Number=this.Flight_Number;
          this.ti.User_Id=this.uid;
          this.ti.Reservation_Date=this.WithoutTime(Date()).toDateString();
          //this.ti.Reservation_Date="2021-05-04";
          this.ti.Reservation_Time=time;
          //this.ti.Reservation_Time="10.05.00"
          this.ti.num_of_Seats=this.selected.length;
          this.ti.Classtype="Eco";
          this.ti.total_price=this.ticketPrice * this.selected.length + this.convFee;
          this.ti.status="InProgress";
          this.ti.Seats=this.selected.toString();
          //console.log(this.ti.Seats);
            this.InsertInFlightReservation()



        } 
        else 
        {
            alert("Select "+this.aci+" seats to proceed!!");
        }
    }

    WithoutTime(dateTime){
        var date=new Date(dateTime);
        date.setHours(0,0,0,0);
        return date;
      }

    InsertInFlightReservation():void{
        // var time=new Date().toLocaleTimeString('it-IT');
    
        //   this.ti.Flight_Number=this.Flight_Number;
        //   this.ti.User_Id=this.uid;
        //   this.ti.Reservation_Date=this.WithoutTime(Date()).toDateString();
        //   //this.ti.Reservation_Date="2021-05-04";
        //   this.ti.Reservation_Time=time;
        //   //this.ti.Reservation_Time="10.05.00"
        //   this.ti.num_of_Seats=this.selected.length;
        //   this.ti.Classtype="Eco";
        //   this.ti.total_price=this.ticketPrice * this.selected.length + this.convFee;
        //   this.ti.status="InProgress";
        //   this.ti.Seats=this.selected.toString();
        //   //console.log(this.ti.Seats);
      
          
          this.svc1.InsertFlightRes(this.ti).subscribe((data:boolean)=>{
            if(data == true){
              alert('Added to Flight Reservation: InProgress');
            }
          });
      }
}