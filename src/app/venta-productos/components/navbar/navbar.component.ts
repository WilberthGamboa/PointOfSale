import { Component, Input, OnInit } from '@angular/core';
import { VentaProductosService } from '../../services/venta-productos.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'venta-productos-navbar',
    templateUrl: './navbar.component.html'
})
export class NavBarComponent implements OnInit {
   
    constructor(private ventaProductosService:VentaProductosService,
      private modalService: NgbModal
      ) { }
  
    ngOnInit(): void { }

    public generarCorte(){
  
      this.ventaProductosService.generarCorte();
       
  }
  open(content:any) {
		this.modalService.open(content);
	}

}
