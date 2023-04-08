import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from 'src/app/products/services/product-service.service'


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  spinner:boolean =false
  id:any
  product:any = {}
  constructor(private routerId:ActivatedRoute, private service:ProductServiceService){
    this.id = this.routerId.snapshot.paramMap.get("id")
    // console.log(this.id)
  }
  // id:any =this.routerId.snapshot.paramMap.get("id")
  ngOnInit(): void {
    this.getProductById(this.id)
    // console.log(this.product)
  }

  getProductById(key:any){
    this.spinner = true
    this.service.getSingleProduct(key).subscribe((res:any)=>{
      this.product = res
      this.spinner = false
      // console.log(this.product)
    })
  }
}

