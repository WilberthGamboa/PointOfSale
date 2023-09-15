import { Component } from '@angular/core';

@Component({
  selector: 'app-venta-productos',
  templateUrl: './venta-productos.component.html',
  styleUrls: ['./venta-productos.component.css']
})
export class VentaProductosComponent {
Number(arg0: string): number {
throw new Error('Method not implemented.');
}
  public data:any [] = [{
    id:1,
    nombre:'Tkt',
    precio:'1000'
  }]

  public venta:any [] = []

  public enviarMensaje(dinero:string){
    (window as any).electronAPI.setTitle('ola');
    const x = Number(dinero)
    console.log(x)
    this.data.forEach(element => {
      if (element.id === x) {
        this.venta.push(element)
      }
      
    });
    console.log(this.venta);
  }

}
