import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interface/product.interface';

@Component({
    selector: 'venta-productos-productlist',
    templateUrl: './productlist.component.html'
})
export class ProductListComponent implements OnInit {
    constructor() { }
    @Input()
    products:Product[] = [];
    ngOnInit(): void { }
}