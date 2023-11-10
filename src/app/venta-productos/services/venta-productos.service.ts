import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/shared/interfaces/product-model.interface';
@Injectable({
    providedIn: 'root'
})
export class VentaProductosService {

    constructor(){}

    async searchProduct(term:string) {
        
        const productModel = await (window as any).electronAPI.getProductByCodeBar(term);
      
        return productModel;
    }

    public async saveSale(term:string){
      await (window as any).electronAPI.saveSale(term);
    }

    public generarCorte(){
  
        (window as any).electronAPI.generarCorte();
         
    }

    
}