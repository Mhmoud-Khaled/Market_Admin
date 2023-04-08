import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectionComponent } from './components/selection/selection.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser'



@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    // ReactiveFormsModule
    // BrowserModule
  ],
  exports:[
    HeaderComponent,
    SpinnerComponent,
    SelectionComponent,
    // ReactiveFormsModule

  ]
})
export class SharedModule { }
