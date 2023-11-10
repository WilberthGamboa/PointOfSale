import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuantityProduct } from '../../interface/product.interface';


@Component({
    selector: 'venta-productos-productlist',
    templateUrl: './productlist.component.html',
    styles: [
        `
        img {
            width: 50px;
            text-align: center;
        }
        `
    ]
})
export class ProductListComponent implements OnInit {
    constructor() { }
    //@Input
    @Input()
    cantidadProducts:QuantityProduct[] = [];
    //@Output
    @Output()
    deleteProductEE = new EventEmitter<number>;
    ngOnInit(): void { }

    public deleteProduct(i:any){
        this.deleteProductEE.emit(i);
        console.log(`El valor es: ${i}`);
    }
}
