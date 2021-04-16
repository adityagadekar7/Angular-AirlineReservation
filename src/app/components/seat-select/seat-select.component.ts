import { Component, OnInit,NgZone } from '@angular/core';
import{Router} from '@angular/router';
import { RESOURCE_CACHE_PROVIDER } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-seat-select',
  templateUrl: './seat-select.component.html',
  styleUrls: ['./seat-select.component.css']
})
export class SeatSelectComponent implements OnInit {

  ngzone: NgZone;
  router: Router;

  constructor(ngzone:NgZone, router:Router) {
    this.ngzone=ngzone;
    this.router=router;
   }

  ngOnInit(): void {
  }


    //variable declarations
    Flight_Number:number = 1;
    
    rows: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I','J','K'];
    cols: number[]  = [1, 2, 3,4, 5, 6];

    reserved: string[] = ['A2', 'A3', 'F5', 'F1', 'F2','F6', 'H1', 'H2', 'H3', 'H4'];
    selected: string[] = [];
    //temp:string[]=[];

    ticketPrice: number = 3500;
    convFee: number = 350;
    totalPrice: number = 0;
    currency: string = "Rs";

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
    }
    //click handler
    seatClicked = function(seatPos: string) {
        var index = this.selected.indexOf(seatPos);
        
        if(index !== -1) {
            // seat already selected, remove
            this.selected.splice(index, 1)
        } else {
            //push to selected array only if it is not reserved
            if(this.reserved.indexOf(seatPos) === -1)
                this.selected.push(seatPos);
        }
    }
    //Buy button handler
    showSelected = function() {
        if(this.selected.length > 0) {
          //alert(this.reserved);
            alert("Selected Seats: " + this.selected + "\nTotal: "+(this.ticketPrice * this.selected.length + this.convFee));
            this.reserved.push(this.selected);
            //this.temp.push(this.selected);
            //alert(this.temp);
            localStorage.setItem('TOTALSEATS',this.selected.length.toString());
            localStorage.setItem('SEATNO',this.selected.toString());
            this.ngzone.run(()=>this.router.navigateByUrl('/Passenger_Details'));
        } else {
            alert("No seats selected!");
        }
    }
}