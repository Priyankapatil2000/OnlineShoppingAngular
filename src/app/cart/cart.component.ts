import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/Modules/Products';
import { CustomerServiceService } from 'src/services/customer-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
  
  // public products:any=[]
  // public grandTotal !: number;
   
  productArr: product[] = [
  ];

  
  constructor(private customerServiceService: CustomerServiceService,private router:Router) { }

  ngOnInit(): void {
    
  }
  removeItem(item:any= product)
  {
    this.customerServiceService.deleteProdFromCart(item);
  }
  emptycart(){
    this.customerServiceService.removeCart();
  }

  placeOrder()
  {
    this.customerServiceService.confirmOrder();
  }
  makepayment()
  {
    
  }

}
