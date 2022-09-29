import { Component, OnInit } from '@angular/core';
import { product } from 'src/Modules/Products';

@Component({
  selector: 'app-retailer-dash',
  templateUrl: './retailer-dash.component.html',
  styleUrls: ['./retailer-dash.component.css']
})
export class RetailerDashComponent implements OnInit {
  products!:product[];
  username:String = "Mayank";

  constructor() { }

  ngOnInit(): void {
  }

}
