import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'venta-productos-ventaTemporal',
    templateUrl: './ventaTemporal.component.html'
})
export class VentaTemporalComponent implements OnInit {
    constructor() { }
    @Input()
    totalSell:number = 0;
    @Input()
    cambio:number = 0;
    @Output() 
    dineroIngresado = new EventEmitter<number>()
    @Output() 
    resetSaleEventEmitter = new EventEmitter<void>();

    @ViewChild('precio') precioInput!: ElementRef<HTMLInputElement>; // Agregamos { static: true }

 
    ngOnInit(): void { }

    public dinero(dinero:string){
        if (!isNaN(Number(dinero)))        
        this.dineroIngresado.emit(Number(dinero));
    }

    public resetSale(){
        console.log("Reset sale hijo")
       
        this.resetSaleEventEmitter.emit();
        this.precioInput.nativeElement.value=' '
        

     
    }

   
  
}
