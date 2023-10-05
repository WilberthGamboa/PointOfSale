import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
    resetSaleEventEmitter = new EventEmitter<void>()
    ngOnInit(): void { }

    public dinero(dinero:string){
        if (!isNaN(Number(dinero)))        
        this.dineroIngresado.emit(Number(dinero));
    }

    public resetSale(){
        console.log("Reset sale hijo")
        this.resetSaleEventEmitter.emit();

     
    }
}
