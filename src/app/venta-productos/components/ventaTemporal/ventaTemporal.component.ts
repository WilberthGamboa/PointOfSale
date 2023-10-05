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
    dineroIngresado = new EventEmitter<string>()
    ngOnInit(): void { }

    public dinero(dinero:string){
        this.dineroIngresado.emit(dinero);
    }
}
