import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CrudProductosService } from '../../services/crud-productos.service';

@Component({
  templateUrl: './crud-productos.component.html',
  styleUrls: ['./crud-productos.component.css']
})
export class CrudProductosComponent implements OnInit{
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
    console.log({inputBarcodeValue,inputProductCostValue,inputProductNameValue})
    console.log(this.selectedValue);
    await this.crudProductosService.saveNewProduct('hola');
  }


}
