import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'venta-productos-searchbar',
    templateUrl: './searchbar.component.html'
})
export class SearchBarComponent implements OnInit {
    @Output() 
    searchProductEvent = new EventEmitter<string>();
    @ViewChild('ref')
    public txtSearch!: ElementRef<HTMLInputElement>
    @ViewChild('inputNumber')
    public inputNumber!: ElementRef<HTMLInputElement>
    constructor() { }

    ngOnInit(): void { }

    public searchProduct(term:string){
        this.searchProductEvent.emit(term);
        this.txtSearch.nativeElement.value=''
           
    }
    @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent,value:string) {
    if (event.key === 'ArrowDown') {
        this.searchProductEvent.emit(value);
        this.txtSearch.nativeElement.value=''
        this.inputNumber.nativeElement.value='1'
      // Se ha presionado la tecla de flecha hacia abajo
      // Puedes realizar acciones específicas aquí
    }
  }
}
