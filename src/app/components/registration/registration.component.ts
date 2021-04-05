import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, FormGroup, NgModel } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 
  constructor(
    ) { }

  ngOnInit(): void {
    
  }
  model: any = [];


  Register(register: NgForm): void {
    console.log(register.value);
  }

}
