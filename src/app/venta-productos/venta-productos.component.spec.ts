import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaProductosComponent } from './venta-productos.component';

describe('VentaProductosComponent', () => {
  let component: VentaProductosComponent;
  let fixture: ComponentFixture<VentaProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentaProductosComponent]
    });
    fixture = TestBed.createComponent(VentaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
