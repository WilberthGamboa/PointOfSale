import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentaPageComponent } from './pages/venta-productos/venta-productos.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { SearchBarComponent } from './components/searchbar/searchbar.component';
import { ProductListComponent } from './components/productslist/productlist.component';

@NgModule({
    declarations: [
        VentaPageComponent,
        NavBarComponent,
        SearchBarComponent,
        ProductListComponent
    ],
    imports: [ CommonModule ],
    exports: [VentaPageComponent, NavBarComponent,SearchBarComponent,ProductListComponent],
    providers: [],
})
export class VentaProductosModule {}