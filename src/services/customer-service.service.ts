import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cart } from 'src/Modules/Cart';
import { customer } from 'src/Modules/Customer';
import { product } from 'src/Modules/Products';
import { wishlist } from 'src/Modules/Wishlist';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http: HttpClient) { }
  Url: string = 'http://localhost:8088/OnlineShoppingApp/customer/'

  addCustomer(cust:customer):Observable<customer>{
    return this.http.post<customer>(this.Url+"create",cust);
  }

  verifyCustomer(cust:customer):Observable<customer>{
    return this.http.post<customer>(this.Url+"Login",cust);
  }

  addToWishlist(prod:product):Observable<wishlist>{
    return this.http.post<wishlist>(this.Url+"AddToWish",prod);
  }

  addToCart(prod:product):Observable<cart>{
    return this.http.post<cart>(this.Url+"AddToCart",prod);
  }

  deleteProdFromCart(prod:product):Observable<cart>{
    return this.http.post<cart>(this.Url+"RemoveFromCart",prod);
  }

  deleteProdFromWish(prod:product):Observable<wishlist>{
    return this.http.post<wishlist>(this.Url+"RemoveFromWish",prod);
  }

  removeWishlist():Observable<String>{
    return this.http.delete<String>(this.Url+'RemoveAllWish');
  }

  removeCart():Observable<String>{
    return this.http.delete<String>(this.Url+'RemoveAllCart');
  }

  confirmOrder():Observable<String>{
    return this.http.get<string>(this.Url+'Order');
  }

  getCart():Observable<cart[]>{
    return this.http.get<cart[]>(this.Url+'GetCart')
  }

  getwish():Observable<wishlist[]>{
    return this.http.get<wishlist[]>(this.Url+'Getwish')
  }

}
