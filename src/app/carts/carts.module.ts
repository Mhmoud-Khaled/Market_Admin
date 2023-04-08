import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { ProductsModule } from "../products/products.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        CartComponent
    ],
    imports: [
        CommonModule,
        ProductsModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class CartsModule { }
