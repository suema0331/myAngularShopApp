import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/product.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListingsComponent implements OnInit {

  products: any ;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    const productsObservable = this.productService.getProducts();
    productsObservable.subscribe(
      (data) => {
        this.products = data;
      },
      (err) => { console.error('次のエラーが発生しました: ' + err); }
    );
  }
}


