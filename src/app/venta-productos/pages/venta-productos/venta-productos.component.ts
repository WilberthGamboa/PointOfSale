import { Component, OnInit } from '@angular/core';
import { CantidadProducto, Product } from '../../interface/product.interface';
import { VentaProductosService } from '../../services/venta-productos.service';
import Swal from 'sweetalert2'
@Component({
    selector: 'venta-productos-page',
    templateUrl: './venta-productos.component.html'

})
export class VentaPageComponent implements OnInit {
    products:Product [] = [];
    cantidadProducts: CantidadProducto [] = [];
    totalSell:number = 0;
    cambio:number=0;

    constructor(private ventaProductosService:VentaProductosService) { }

    ngOnInit(): void { }

    public async searchProduct(term:string){
        const producto= await this.ventaProductosService.searchProduct(term);
        let isProduct = false;
        for (const productoActual of this.cantidadProducts) {
            if (productoActual.barcode===producto.barcode) {
                isProduct=true;
                productoActual.cantidad++;
            }
        }

        if (!isProduct) {
            const nuevoProducto = {
                ...producto,
                cantidad:1
            }
            this.cantidadProducts.push(nuevoProducto)
            
        }
        const {price} = producto;
        if (price) {
            this.actualizarVentaActual(price);
            this.agregarProductoLista(producto);
            
        }
      
    }
    public async getcambio(dineroIngresado:number){
            const cambioTemporal = dineroIngresado-this.totalSell;
            if (cambioTemporal>0 && this.totalSell!=0){
                this.cambio = dineroIngresado-this.totalSell;
                for (const product of this.products) {
                    await  this.ventaProductosService.saveSale(product.barcode);
                }
                const cambioFormateado = new Intl.NumberFormat('es-MX', {
                    style: 'currency',
                    currency: 'MXN',
                  }).format(this.cambio);
                Swal.fire({
                    title: 'Venta registrada con éxito',
                    text: 'El cambio es de: '+ cambioFormateado,
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
              this.resetSale()
            }
         
            
       
    }
    public resetSale(){
    
        this.products = [];
        this.cantidadProducts=[];
        this.totalSell=0;
        this.cambio=0;
        
    
            
    }
    private actualizarVentaActual(price:number){
        this.totalSell = this.totalSell + price;
    }

    private agregarProductoLista(producto:Product){
        this.products.push(producto);
    }
    public generarCorte(){
  
          (window as any).electronAPI.generarCorte();
           
      }

}
