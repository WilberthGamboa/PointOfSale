import { NgModule } from '@angular/core';
import { HomePageComponentComponent } from './pages/home-page/home-page-component/home-page-component.component';
import { RouterModule } from '@angular/router';



@NgModule({
    imports: [
      RouterModule
    ],
    exports: [
        HomePageComponentComponent
    ],
    declarations: [
    HomePageComponentComponent
  ],
    providers: [],
})
export class HomeModule { }
