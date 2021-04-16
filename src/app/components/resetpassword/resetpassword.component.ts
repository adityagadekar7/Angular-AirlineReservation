import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, FormGroup } from '@angular/forms'
import { ResgisterauModule } from 'src/app/Modules/resgisterau/resgisterau.module'
import { RegisterauService } from 'src/app/Services/registerau.service';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  model: any = [];
  svc: RegisterauService;
  reg = new ResgisterauModule;
  email: string;
  password: string;
  flag: boolean = false;
  constructor(svc: RegisterauService) { this.svc = svc; }

  ngOnInit(): void {
  }
  
}
