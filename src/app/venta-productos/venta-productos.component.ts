import { Component } from '@angular/core';
import { Product } from './interface/product.interface';

@Component({
  selector: 'app-venta-productos',
  templateUrl: './venta-productos.component.html',
  styleUrls: ['./venta-productos.component.css']
})
export class VentaProductosComponent {

  public data:Product[] = [{
    barcode:'1',
    nombre:'TKT L MISIL',
    precio:44,
    categoria:'cerveza'
  },
  {
    barcode:'2',
    nombre:'XX LAGUER MISIL',
    precio:45,
    categoria:'cerveza'
  },

  {
    barcode:'3',
    nombre:'SUPERIOR MISIL',
    precio:40,
    categoria:'cerveza'
  }

]

  public venta:any [] = []

  public enviarMensaje(dinero:string){
    (window as any).electronAPI.setTitle('ola');
    const x = Number(dinero)
    
    this.data.forEach(element => {
      if (element.barcode === dinero) {
        this.venta.push(element)
      }
      
    });
    console.log(this.venta);
  }

  public reiniciarVenta(){
    this.venta = [];
  }

}
