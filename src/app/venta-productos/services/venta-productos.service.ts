import { Injectable } from '@angular/core';
import { Product } from '../interface/product.interface';

@Injectable({
    providedIn: 'root'
})
export class VentaProductosService {

    constructor(){}

    async searchProduct(term:string):Promise<Product> {
        const {dataValues} = await (window as any).electronAPI.getProductByCodeBar(term);
        return dataValues;
    }

    
}