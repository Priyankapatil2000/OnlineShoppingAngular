import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from 'src/Modules/Products';
import { retailers } from 'src/Modules/Retailer';

@Injectable({
  providedIn: 'root'
})
export class RetailerServiceService {

  constructor(private http: HttpClient) { }
  Url: string = 'http://localhost:8088/OnlineShoppingApp/retailer/'

  verifyRetailer(admin:retailers):Observable<retailers>{
    return this.http.post<retailers>(this.Url+'retLogin',admin);
  }
  findProdById(pid:number):Observable<product>{
    return this.http.get<product>(this.Url+'findProd/'+pid);
  }

  addIntoProducts(prod:product):Observable<product>{
    return this.http.post<product>(this.Url+'AddProducts',prod);
  }

  removeFromProducts(prod:product):Observable<product>{
    return this.http.post<product>(this.Url+'DeleteProducts',prod);
  }

}
