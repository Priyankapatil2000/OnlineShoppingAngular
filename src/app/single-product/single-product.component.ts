import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'src/Modules/Products';
import { RetailerServiceService } from 'src/services/retailer-service.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  parent_supp_id:string='123'
  
  product:product;
  constructor(private activatedRoute: ActivatedRoute,private router:Router,private retSer:RetailerServiceService) { }

  product_id:number=this.activatedRoute.snapshot.params['id']

  ngOnInit(): void {
   this.retSer.findProdById(this.product_id).subscribe(data=>{
    this.product=data;
   })
  }

  addToCart(pid:number){

  }

  addtocart(id:number){

  }
  back(){
    this.router.navigate(['/products'])
  }

}
