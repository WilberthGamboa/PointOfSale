import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'venta-productos-searchbar',
    templateUrl: './searchbar.component.html'
})
export class SearchBarComponent implements OnInit {
    @Output() 
     searchEvent = new EventEmitter<string>()
    constructor() { }

    ngOnInit(): void { }
   ;
    public search(term:string){
        console.log(term)
        this.searchEvent.emit(term);
        

    }
}
