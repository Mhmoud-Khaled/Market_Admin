import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent {
  @Input() title:string=''
  @Input() data:any[] = []
  @Output() selectedValue = new EventEmitter()
  @Input() all:boolean = true
  @Input() selected = ''

  filter(event:any){
    this.selectedValue.emit(event)
  }
}
