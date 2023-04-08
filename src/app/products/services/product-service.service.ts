import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }
  getAllProducts(){
    return this.http.get('https://fakestoreapi.com/products')
  }

  getAllcategory(){
    return this.http.get('https://fakestoreapi.com/products/categories')
  }

  getProductByCategoryApi(keyword:string){
    console.log(keyword)
    return this.http.get('https://fakestoreapi.com/products/category/'+keyword)
  }

  getSingleProduct(id:any){
    return this.http.get('https://fakestoreapi.com/products/'+id)
  }

  addNewProduct(body:any){
    return this.http.post('https://fakestoreapi.com/products/',body)
  }
}
