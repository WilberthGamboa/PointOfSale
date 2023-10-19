import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'venta-productos-searchbar',
    templateUrl: './searchbar.component.html'
})
export class SearchBarComponent implements OnInit {
    @Output() 
    searchProductEvent = new EventEmitter<any>();
    @ViewChild('ref')
    public txtSearch!: ElementRef<HTMLInputElement>
    @ViewChild('inputNumber')
    public inputNumber!: ElementRef<HTMLInputElement>
    constructor() { }

    ngOnInit(): void { }

    public searchProduct(term:any){
      const test = {
        xd:this.inputNumber.nativeElement.value,
        xd2:   this.txtSearch.nativeElement.value
      }
        this.searchProductEvent.emit(test);
        this.txtSearch.nativeElement.value=''
           
    }
    @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent,value:string) {
    if (event.key === 'ArrowDown') {
      const test = {
        xd:this.inputNumber.nativeElement.value,
        xd2:   this.txtSearch.nativeElement.value
      }
        this.searchProductEvent.emit(test);
        this.txtSearch.nativeElement.value=''
        this.inputNumber.nativeElement.value='1'
      // Se ha presionado la tecla de flecha hacia abajo
      // Puedes realizar acciones específicas aquí
    }
  }
}
