import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductServiceService } from 'src/app/products/services/product-service.service';
import { CartServicesService } from '../../services/cart-services.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  Carts: any[]=[];
  products:any[] = []
  quantity:number[] = []
  totalPrice:number = 0

  constructor(private service:CartServicesService, private formBulider: FormBuilder,private productService: ProductServiceService){
  }
  form!:FormGroup
  ngOnInit(): void {
    this.getCarts()
    this.form = this.formBulider.group({
      start : '',
      end : ''
    })
  }

  getCarts(){
    this.service.getAllCarts().subscribe((res:any)=>{
      this.Carts=res
      // console.log(res)
    })
  }

  deleteProduct(id:any){
    this.service.deleteCart(id).subscribe((res:any)=>{
      console.log(res)
      this.getCarts()
      alert("Delete Success")
    })
  }

  apply(){
    let date = this.form.value
    this.service.getRangeCarts(date).subscribe((res:any)=>{
      this.Carts =res
      console.log(res)
    })
    console.log(this.form.value)
  }

  viewProducts(item:any){
    this.products=[]
    this.quantity = []
    this.totalPrice = 0
    for(let prod in item){
      this.quantity.push(item[prod].quantity)
      this.productService.getSingleProduct(item[prod].productId).subscribe((res:any)=>{
      this.products.push(res)
      this.totalPrice += res.price * item[prod].quantity
    })
    }
  }
}
