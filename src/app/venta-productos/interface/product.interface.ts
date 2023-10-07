export interface Product {
    barcode : string
    productname: string
    price: number,
    category:string
}

export interface CantidadProducto extends Product {
    cantidad:number
}