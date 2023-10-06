import { Component, OnInit } from '@angular/core';
import { Product } from '../../interface/product.interface';
import { VentaProductosService } from '../../services/venta-productos.service';

@Component({
    selector: 'venta-productos-page',
    templateUrl: './venta-productos.component.html'

})
export class VentaPageComponent implements OnInit {
    products:Product [] = [];
    totalSell:number = 0;
    cambio:number=0;
    constructor(private ventaProductosService:VentaProductosService) { }

    ngOnInit(): void { }

    public async searchProduct(term:string){
        const producto= await this.ventaProductosService.searchProduct(term);
        console.log(producto)
        const {price} = producto;
        if (price) {
            this.actualizarVentaActual(price);
            this.agregarProductoLista(producto);
        }
      
    }
    public getcambio(dineroIngresado:number){
            this.cambio = dineroIngresado-this.totalSell;
    }

    private actualizarVentaActual(price:number){
        this.totalSell = this.totalSell + price;
    }

    private agregarProductoLista(producto:Product){
        this.products.push(producto);
    }


}
