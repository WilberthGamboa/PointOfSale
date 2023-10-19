import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponentComponent } from './home/pages/home-page/home-page-component/home-page-component.component';
import { VentaProductosModule } from './venta-productos/venta-productos.module';
import { VentaPageComponent } from './venta-productos/pages/venta-productos/venta-productos.component';
import { CrudProductosComponent } from './crud-productos/pages/crud-productos/crud-productos.component';

const routes: Routes = [
  {
    path:'',
    component:HomePageComponentComponent
  },
  {
    path:'puntoDeVenta',
    component:VentaPageComponent
  },
  {
    path:'crudProductos',
    component:CrudProductosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
