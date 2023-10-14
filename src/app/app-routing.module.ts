import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponentComponent } from './home/pages/home-page/home-page-component/home-page-component.component';
import { VentaProductosModule } from './venta-productos/venta-productos.module';
import { VentaPageComponent } from './venta-productos/pages/venta-productos/venta-productos.component';

const routes: Routes = [
  {
    path:'',
    component:HomePageComponentComponent
  },
  {
    path:'puntoDeVenta',
    component:VentaPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
