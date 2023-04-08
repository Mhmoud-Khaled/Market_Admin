import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from "../shared/shared.module";
import { ProductComponent } from './components/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        AllProductsComponent,
        ProductDetailsComponent,
        ProductComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        SharedModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule
    ],exports:[
      ProductComponent,
      ReactiveFormsModule
    ]
})
export class ProductsModule { }
