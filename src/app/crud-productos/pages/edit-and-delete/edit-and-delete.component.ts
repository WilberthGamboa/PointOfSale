import { Component, ElementRef, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { CrudProductosService } from '../../services/crud-productos.service';

@Component({
  templateUrl: './edit-and-delete.component.html',
  styles: [
  ]
})
export class EditAndDeleteComponent {
  @ViewChild('inputBarcode')
inputBarcode!: ElementRef<HTMLInputElement>

@ViewChild('inputProductName')
inputProductName!: ElementRef<HTMLInputElement>

@ViewChild('inputProductCost')
inputProductCost!: ElementRef<HTMLInputElement>
categories: any = [
   
];
selectedValue: string = 'Cerveza';

  constructor(private crudProductosService:CrudProductosService){}
  async ngOnInit(): Promise<void> {
     const x  = await this.crudProductosService.getCategories();
    for (const iterator of x) {
      this.categories.push(iterator.dataValues.categoriaName)
    }
   
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
