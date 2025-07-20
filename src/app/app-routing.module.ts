import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PintureriaAboutComponent } from './pintureria-about/pintureria-about.component';
import { PintureriaProductsComponent } from './pintureria-products/pintureria-products.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: PintureriaAboutComponent
  },
  {
    path: 'products',
    component: PintureriaProductsComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
