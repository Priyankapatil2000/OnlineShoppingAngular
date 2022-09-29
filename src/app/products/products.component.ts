import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/Modules/Products';
import { AdminServiceService } from 'src/services/admin-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productArr: product[] = [];


  public productList : any ;
  public filterCategory : any
  searchKey:string ="";
  constructor( private router:Router,private admin:AdminServiceService) { }
  price:number[]=[];

  ngOnInit(): void {
    
    this.admin.getAllProducts().subscribe(data=>{
      this.productArr=data;
     })
  }
  addToCart(id:number){
  
  }
  loggedIn(): any {
    return true;
  }
  displayProductDetails(pid: number) {
    
    console.log("Product Id of item clicked: " + pid)
    this.router.navigate(['/singleproduct/' + pid])

  }
}
