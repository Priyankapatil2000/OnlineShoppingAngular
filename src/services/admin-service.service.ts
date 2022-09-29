import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { admin } from 'src/Modules/Admin';
import { product } from 'src/Modules/Products';
import { retailers } from 'src/Modules/Retailer';

@Injectable({
  providedIn: 'root'
})

export class AdminServiceService {

  constructor(private http: HttpClient) { }
  Url: string = 'http://localhost:8088/OnlineShoppingApp/admin/'

  verifyAdmin(admin:admin):Observable<admin>{
    return this.http.post<admin>(this.Url+'Login',admin);
  }

  getAllRetailers():Observable<retailers[]>{
    return this.http.get<retailers[]>(this.Url+'Retailers') ; 
  }
  getAllProducts():Observable<product[]>{
    return this.http.get<product[]>(this.Url+'Products') ; 
  }

  addRetailer(retailer:retailers):Observable<retailers>{
    return this.http.post<retailers>(this.Url+'AddRetailer',retailer);
  }

  removeRetailer(retailer:retailers):Observable<retailers>{
    return this.http.post<retailers>(this.Url+'RemoveRetailer',retailer);
  }
}
