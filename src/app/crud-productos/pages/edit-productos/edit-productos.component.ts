import { Component, ElementRef, ViewChild } from '@angular/core';
import { CrudProductosService } from '../../services/crud-productos.service';
import Swal from 'sweetalert2';
import { Product } from 'src/app/venta-productos/interface/product.interface';

@Component({
  templateUrl: './edit-productos.component.html',
  styles: [
  ]
})
export class EditProductosComponent {
  categories: any = [
   
  ]; 
  // ViewChild
@ViewChild('inputBarcode')
inputBarcode!: ElementRef<HTMLInputElement>

@ViewChild('inputProductName')
inputProductName!: ElementRef<HTMLInputElement>

@ViewChild('inputProductCost')
inputProductCost!: ElementRef<HTMLInputElement>

selectedValue: string = 'Cerveza';

productoBuscado:Product = {
  barcode: '',
  productname: '',
  price: 0,
  category: ''
}
  constructor(private crudProductosService:CrudProductosService){}

  async searchProduct(){
 const x = await this.crudProductosService.searchProduct(this.inputBarcode.nativeElement.value);
 console.log({x})
 this.productoBuscado = x;
  this.inputProductName.nativeElement.value = this.productoBuscado.productname;
  this.inputProductCost.nativeElement.value= String(this.productoBuscado.price);
  console.log(this.productoBuscado.category)
  this.selectedValue= this.productoBuscado.category;

  }
  async saveNewProduct(){
    const inputBarcodeValue = this.inputBarcode.nativeElement.value;
    const inputProductNameValue = this.inputProductName.nativeElement.value;
    const inputProductCostValue = this.inputProductCost.nativeElement.value;
    if (inputBarcodeValue=='' || inputProductNameValue==''||isNaN(Number(inputProductCostValue))||inputProductCostValue=='') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
       
      })
      return;
    }
    const data = {
      productname: inputProductNameValue,
      barcode:inputBarcodeValue,
      price:Number(inputProductCostValue),
      categoryName:this.selectedValue
    }
    const response = await this.crudProductosService.saveNewProduct(data);
    console.log(response)
    if (response!=undefined) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `Mensaje de error: ${response}`
       
      })
    }
  }
}
