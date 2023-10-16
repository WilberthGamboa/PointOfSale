import { Component, Input, OnInit } from '@angular/core';
import { VentaProductosService } from '../../services/venta-productos.service';

@Component({
    selector: 'venta-productos-navbar',
    templateUrl: './navbar.component.html'
})
export class NavBarComponent implements OnInit {
   
    constructor(private ventaProductosService:VentaProductosService) { }
  
    ngOnInit(): void { }

    public generarCorte(){
  
      this.ventaProductosService.generarCorte();
       
  }


}
