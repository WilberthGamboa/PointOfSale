import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtoHomeComponent } from './components/buttonhome/butto-home/butto-home.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ButtoHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    ButtoHomeComponent
  ]
})
export class SharedModule { }
