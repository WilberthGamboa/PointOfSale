import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'venta-productos-navbar',
    templateUrl: './navbar.component.html'
})
export class NavBarComponent implements OnInit {
   
    constructor() { }
  
    ngOnInit(): void { }

    public generarCorte(){
      console.log(2)
      //   (window as any).electronAPI.generarCorte();
         
    }

}
