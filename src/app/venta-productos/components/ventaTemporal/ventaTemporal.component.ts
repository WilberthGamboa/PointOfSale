import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
    selector: 'venta-productos-ventaTemporal',
    templateUrl: './ventaTemporal.component.html'
})
export class VentaTemporalComponent implements OnInit {
    constructor() { }
    //@Inputs
    @Input()
    totalSell:number = 0;
    @Input()
    cambio:number = 0;
    //@Output
    @Output() 
    receivedAmountEE = new EventEmitter<number>()
    @Output() 
    resetSaleEE = new EventEmitter<void>();
    //Input
    @ViewChild('inputMontoRecibo') 
    inputMontoRecibido!: ElementRef<HTMLInputElement>; // Agregamos { static: true }


    ngOnInit(): void { }

    public receivedAmount(){
        const inputMontoRecibidoValue = Number(this.inputMontoRecibido.nativeElement.value);
        if (!isNaN(inputMontoRecibidoValue)&&inputMontoRecibidoValue>=1){
            this.receivedAmountEE.emit(inputMontoRecibidoValue);
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Verificar efectivo',
                text: 'El dinero a recibir debe ser minimo de un peso'
              })
        }
      
    }

    public resetSale(){      
        this.resetSaleEE.emit();
        this.inputMontoRecibido.nativeElement.value=' '
    }

   
  
}
