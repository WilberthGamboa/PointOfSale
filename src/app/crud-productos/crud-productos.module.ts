import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudProductosComponent } from './pages/crud-productos/crud-productos.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CrudProductosComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CrudProductosModule { }
