import { Component, ElementRef, ViewChild } from '@angular/core';
import { CrudProductosService } from '../../services/crud-productos.service';
import Swal from 'sweetalert2';
import { ProductWithCategory } from '../../interface/modelos';



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

  productoBuscado: ProductWithCategory = {
    id: 0,
    productname: '',
    barcode: '',
    price: 0,
    createdAt: '',
    updatedAt: '',
    categoriaId: 0,
    categorium: {
      id: 0,
      categoriaName: '',
      createdAt: '',
      updatedAt: ''
    }
  }
  constructor(private crudProductosService: CrudProductosService) { }

  async searchProduct() {
    const x = await this.crudProductosService.searchProduct(this.inputBarcode.nativeElement.value);
    console.log({ x })
    //this.productoBuscado = x;
    this.inputProductName.nativeElement.value = x.productname;
    this.inputProductCost.nativeElement.value = String(x.price);
    console.log(x.categorium.categoriaName)
    this.selectedValue = x.categorium.categoriaName;
    const xD = await this.crudProductosService.getCategories();
    for (const iterator of xD) {
      this.categories.push(iterator.dataValues.categoriaName)
    }
  }

  async editProduct(){
    
  }



}
