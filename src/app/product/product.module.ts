import { NgModule } from '@angular/core';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductListingsComponent} from './product-listings/product-listings.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ProductComponent} from './product.component';
import {ProductService} from './shared/product.service';


const routes: Routes = [
  {
    path: 'products', component:  ProductComponent,
    children: [
      {path: '', component:  ProductListingsComponent }, // routeroutlet
      {path: ':productId', component: ProductDetailComponent },
    ]
  },
];

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductListingsComponent,
  ],
  imports: [
    RouterModule.forChild(routes), // RouteはAppmodule
    CommonModule
  ],
  // exports: [RouterModule],
  providers: [ProductService],
  bootstrap: []
})
export class ProductModule { }
