import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServicesService {

  constructor(private http:HttpClient) { }

  getAllCarts(){
    return this.http.get("https://fakestoreapi.com/carts")
  }

  getRangeCarts(query:any){
    let param =new HttpParams()
    param = param.append("startdate",query.start).append("enddate",query.end)
    return this.http.get("https://fakestoreapi.com/carts",{params:param})
  }

  deleteCart(id:number){
    return this.http.delete("https://fakestoreapi.com/carts/"+id)
  }

  // getProductById(id:number){
  //   return this.http.get("https://fakestoreapi.com/products/"+id)
  // }
}
