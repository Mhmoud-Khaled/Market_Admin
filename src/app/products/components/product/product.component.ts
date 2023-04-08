import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
@Input() item:any=''
@Output() button = new EventEmitter()
addButton:boolean = true
amount:number=1

add(){
  this.addButton = !this.addButton
  return this.button.emit({data:this.item, quantity:this.amount})
}

hidden(){
  this.addButton =false
}
}

