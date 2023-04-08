import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductServiceService } from 'src/app/products/services/product-service.service'

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit{
  products:any[]=[]
  categories:any[] = []
  spinner:boolean =false
  form!:FormGroup
  base64:any = ''
  constructor(private service:ProductServiceService, private fb:FormBuilder){

    this.form = this.fb.group({
      title: ['',Validators.required],
      price: ['',Validators.required],
      description: ['',Validators.required],
      image: ['',Validators.required],
      category: ['',Validators.required]
    })

  }

  ngOnInit(): void {
    this.getproduct(),
    this.getcategory()
    }

  getproduct(){
    this.spinner = false
    this.service.getAllProducts().subscribe((res:any)=>{
      // console.log(res.slice(0,50))
      this.products = res
      this.spinner = true
      // console.log(this.products)
    }, error =>{
      alert(error.message)
    })
  }
  getcategory(){
    this.service.getAllcategory().subscribe((res:any)=>{
      this.categories=res//.slice(0,5)
      // console.log(this.categories)
    }, error =>{
      alert(error.message)
    })
  }

  filterByCategory(event:any){
    let value = event.target.value
    if(value !='all'){
      this.filterproductbyCategory(value)
      console.log(value)
    }else{
      this.getproduct()
    }
    // console.log(value)
  }



  filterproductbyCategory(keyword: string){
    this.spinner = false
      this.service.getProductByCategoryApi(keyword).subscribe((res:any)=>{
        // console.log("filter"+res)
        this.products=res
        this.spinner = true
      }, error =>{
        alert(error.message)
      })
  }

  addProduct(){
    let body = this.form.value
    this.service.addNewProduct(body).subscribe((res:any)=>{
      alert("The Product is Added")
      // console.log("resulrt")
      // console.log(res)
      // console.log("body")
      // console.log(body)
    })
    // this.clearAddProductData()
  }

  getBase64(event:any) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = ()=>{
      this.base64 = reader.result;
      this.form.get("image")?.setValue("this.base64")
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  getSelectedValue(event:any){
    this.form.get("category")?.setValue(event.target.value)
  }

  clearAddProductData(){
    this.form.setValue({
    title: '',
    price: '',
    description: '',
    image: '',
    category: ''
  })
  this.base64 = ""
  }

  updateDate(item:any){
    this.service.getSingleProduct(item).subscribe((res:any)=>{
      // console.log(res)
      this.form.setValue({
        title: res.title,
        price: res.price,
        description: res.description,
        image: res.image,
        category: res.category
      })
      this.base64 = res.image
    })
  }

}

