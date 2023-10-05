import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'venta-productos-page',
    templateUrl: './venta-productos.component.html'

})
export class VentaPageComponent implements OnInit {
    products:any = [];
    totalSell:number = 0;
    cambio:number=0;
    constructor() { }

    ngOnInit(): void { }

    public async getProduct(term:string){
        const response = await (window as any).electronAPI.getProductByCodeBar(term);
        if (response) {
            console.log(response.dataValues)
            this.totalSell = this.totalSell + response.dataValues.price;
            this.products.push(response.dataValues);
            
        }
    }
    public getcambio(dineroIngresado:string){
        if (isNaN(Number(dineroIngresado))) {
            
        }else{
            const data = Number(dineroIngresado)
            this.cambio= data-this.totalSell;
        }
    
    
    }


}
