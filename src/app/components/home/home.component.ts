import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, FormGroup, NgModel } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  model: any = [];


  Bookflight(book: NgForm): void {
    console.log(book.value);
  }

}
