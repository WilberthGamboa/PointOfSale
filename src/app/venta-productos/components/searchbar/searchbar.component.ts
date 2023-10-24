import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import { SearchBarProduct } from '../../interface/searchBarProduct.interface';
import Swal from 'sweetalert2';

@Component({
    selector: 'venta-productos-searchbar',
    templateUrl: './searchbar.component.html'
})
export class SearchBarComponent implements OnInit {
    //EE
    @Output() 
    searchProductEE = new EventEmitter<SearchBarProduct>();
    // Inputs
    @ViewChild('inputBarcode')
    public inputBarcode!: ElementRef<HTMLInputElement>
    @ViewChild('inputNumber')
    public inputNumber!: ElementRef<HTMLInputElement>
    constructor() { }

    ngOnInit(): void { }

    // Debemos refactorizar
  public searchProductEnterEvent(){
    this.searchProduct();
  }


  @HostListener('document:keydown', ['$event'])
  public searchProductEnterArrowDown(event: KeyboardEvent) {
    if (event.key === 'ArrowDown') {
      this.searchProduct();
    }
  }
  private searchProduct(){
    const inputBarcodeValue = this.inputBarcode.nativeElement.value;
    const inputNumberValue = Number(this.inputNumber.nativeElement.value);
    if (isNaN(inputNumberValue)||inputNumberValue<=0||inputNumberValue>=100) {
      Swal.fire({
        icon: 'error',
        title: 'Inserta la cantidad de productos',
        text: 'Recuerda que la cantidad de productos mínima es 1 y la máxima de 100'
      })
      this.inputNumber.nativeElement.value='1';
    }else{
      const searchBarProduct:SearchBarProduct = {
        codebar:inputBarcodeValue ,
        numberOfProducts: inputNumberValue
      }
      this.searchProductEE.emit(searchBarProduct);
      this.inputBarcode.nativeElement.value='';
      this.inputNumber.nativeElement.value='1';
    }    
  }
}
