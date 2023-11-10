//Angular
import { Component, OnInit } from '@angular/core';
//Libraries
import Swal from 'sweetalert2';
//Interfaces
import { ProductModel } from 'src/app/shared/interfaces/product-model.interface';
import { QuantityProduct } from '../../interface/product.interface';
import { SearchBarProduct } from '../../interface/searchBarProduct.interface';
//Service
import { VentaProductosService } from '../../services/venta-productos.service';

@Component({
    selector: 'venta-productos-page',
    templateUrl: './venta-productos.component.html'

})
export class VentaPageComponent implements OnInit {
    // Lista de productos
    private products: ProductModel[] = [];
    private quantityProducts: QuantityProduct[] = [];
    private totalSell: number = 0;
    private change: number = 0;

    constructor(private ventaProductosService: VentaProductosService) { }

    ngOnInit(): void { }
    //VentaTemporal
    public async changeSale(receivedAmount: number) {
        const changeSale = receivedAmount - this.totalSell;
        if (changeSale >= 0 && this.totalSell != 0) {
            this.change = changeSale - this.totalSell;
            for (const product of this.products) {
                await this.ventaProductosService.saveSale(product.barcode);
            }
            const cambioFormateado = new Intl.NumberFormat('es-MX', {
                style: 'currency',
                currency: 'MXN',
            }).format(this.change);
            Swal.fire({
                title: 'Venta registrada con éxito',
                text: 'El cambio es de: ' + cambioFormateado,
                icon: 'success',
                confirmButtonText: 'Ok'
            })
            this.resetSale()
        } else {
            Swal.fire({
                title: 'Verificar dinero a cobrar',
                text: 'No se puede realizar venta si se cobra menos de lo que se vende',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }
    }

    public resetSale() {
        this.products = [];
        this.quantityProducts = [];
        this.totalSell = 0;
        this.change = 0;
    }
    // SearchBar
    public async searchProduct(searchBarProduct: SearchBarProduct) {
        for (let index = 0; index < searchBarProduct.numberOfProducts; index++) {
            const producto = await this.ventaProductosService.searchProduct(searchBarProduct.codebar);
            let isProduct = false;
            for (const productoActual of this.quantityProducts) {
                if (productoActual.barcode === producto.barcode) {
                    isProduct = true;
                    productoActual.quantity++;
                }
            }
            if (!isProduct) {
                const nuevoProducto = {
                    ...producto,
                    cantidad: 1
                }
                this.quantityProducts.push(nuevoProducto)

            }
            const { price } = producto;
            if (price) {
                this.actualizarVentaActual(price);
                this.agregarProductoLista(producto);

            }

        }


    }
    //tabla
    public deleteProductList(i: number) {


        console.log(this.products.splice(i, 1))
        const temp = this.quantityProducts.splice(i, 1)
        const dineroActualizar = temp[0].quantity * temp[0].price;
        this.totalSell = this.totalSell - dineroActualizar;
    }
    //Métodos propios

    private actualizarVentaActual(price: number) {
        this.totalSell = this.totalSell + price;
    }

    private agregarProductoLista(producto: ProductModel) {
        this.products.push(producto);
    }

}
