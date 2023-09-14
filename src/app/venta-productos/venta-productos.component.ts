import { Component } from '@angular/core';

@Component({
  selector: 'app-venta-productos',
  templateUrl: './venta-productos.component.html',
  styleUrls: ['./venta-productos.component.css']
})
export class VentaProductosComponent {

  public enviarMensaje(){
  
    (window as any).electronAPI.setTitle('Título de la ventana');
    console.log("xd")
  }

}
