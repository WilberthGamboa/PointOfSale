import { ProductModel } from "src/app/shared/interfaces/product-model.interface"



export interface QuantityProduct extends ProductModel {
    quantity:number
}