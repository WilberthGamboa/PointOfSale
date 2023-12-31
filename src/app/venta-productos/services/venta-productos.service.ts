import { Injectable } from '@angular/core';
import { Product } from '../interface/product.interface';

@Injectable({
    providedIn: 'root'
})
export class VentaProductosService {

    constructor(){}

    async searchProduct(term:string) {
        const {dataValues} = await (window as any).electronAPI.getProductByCodeBar(term);
        console.log(dataValues)
        return dataValues;
    }

    public async saveSale(term:string){
      await (window as any).electronAPI.saveSale(term);
    }

    public generarCorte(){
  
        (window as any).electronAPI.generarCorte();
         
    }

    
}