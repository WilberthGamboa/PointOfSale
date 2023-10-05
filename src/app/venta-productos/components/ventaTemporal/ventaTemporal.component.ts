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
    ngOnInit(): void { }

    public dinero(dinero:string){
        if (!isNaN(Number(dinero)))        
        this.dineroIngresado.emit(Number(dinero));
    }
}
