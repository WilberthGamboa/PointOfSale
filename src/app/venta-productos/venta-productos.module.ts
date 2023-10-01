import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentaPageComponent } from './pages/venta-productos/venta-productos.component';

@NgModule({
    declarations: [
        VentaPageComponent
    ],
    imports: [ CommonModule ],
    exports: [VentaPageComponent],
    providers: [],
})
export class VentaProductosModule {}