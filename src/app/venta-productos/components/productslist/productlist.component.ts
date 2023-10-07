import { Component, Input, OnInit } from '@angular/core';
import { CantidadProducto } from '../../interface/product.interface';


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
    @Input()
    cantidadProducts:CantidadProducto[] = [];
    ngOnInit(): void { }
}
