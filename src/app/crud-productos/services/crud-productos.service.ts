import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudProductosService {


  constructor() { }

  async searchProduct(term:string) {
    const dataValues = await (window as any).electronAPI.getProductByCodeBarWithCategory(term);
    console.log(dataValues)
    return dataValues;
}


  async getCategories(){
  
  return await (window as any).electronAPI.getCategories();
  }
  async saveNewProduct(data:any){
    return await (window as any).electronAPI.saveNewProduct(data);
  }
}
