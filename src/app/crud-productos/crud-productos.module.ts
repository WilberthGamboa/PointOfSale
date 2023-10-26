  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { CrudProductosComponent } from './pages/crud-productos/crud-productos.component';
  import { SharedModule } from '../shared/shared.module';
  import { FormsModule } from '@angular/forms';
import { EditAndDeleteComponent } from './pages/edit-and-delete/edit-and-delete.component';
import { RouterModule } from '@angular/router';



  @NgModule({
    declarations: [
      CrudProductosComponent,
      EditAndDeleteComponent
    ],
    imports: [
      CommonModule,
      SharedModule,
      FormsModule,
      RouterModule
    ]
  })
  export class CrudProductosModule { }
