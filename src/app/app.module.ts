import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VentaProductosModule } from './venta-productos/venta-productos.module';
import { HomeModule } from './home/home.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CrudProductosModule } from './crud-productos/crud-productos.module';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VentaProductosModule,
    HomeModule,
    NgbModule,
    CrudProductosModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
