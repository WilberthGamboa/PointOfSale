import { Component, OnInit } from '@angular/core';
import { CrudProductosService } from '../../services/crud-productos.service';

@Component({
  templateUrl: './crud-productos.component.html',
  styleUrls: ['./crud-productos.component.css']
})
export class CrudProductosComponent implements OnInit{
  categories: any = [
    'hola',
    'adios',
  ]; 

  constructor(private crudProductosService:CrudProductosService){}
  async ngOnInit(): Promise<void> {
     const x  = await this.crudProductosService.getCategories();
    for (const iterator of x) {
      this.categories.push(iterator.dataValues.categoriaName)
    }
   
  }

  async getCategories(){
    
  }


}
