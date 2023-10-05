import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'venta-productos-searchbar',
    templateUrl: './searchbar.component.html'
})
export class SearchBarComponent implements OnInit {
    @Output() 
    searchProductEvent = new EventEmitter<string>()
    constructor() { }

    ngOnInit(): void { }

    public searchProduct(term:string){
        this.searchProductEvent.emit(term);    
    }
}
