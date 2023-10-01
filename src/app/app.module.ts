import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VentaProductosModule } from './venta-productos/venta-productos.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VentaProductosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
