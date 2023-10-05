import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'venta-productos-productlist',
    templateUrl: './productlist.component.html'
})
export class ProductListComponent implements OnInit {
    constructor() { }
    @Input()
    products:any = [];
    ngOnInit(): void { }
}
