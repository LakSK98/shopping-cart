import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import Product from 'src/app/models/product.model';
import { setProducts, updateProduct } from 'src/app/store/products/products.actions';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList$: Observable<Array<Product>>;
  isLogged: boolean = false;

  constructor(
    private readonly httpService: HttpService,
    private readonly store: Store<{ products: Array<Product>, login: boolean }>,
    private readonly router: Router
  ) {
    this.productList$ = store.select('products');
    store.select('login').subscribe(data => this.isLogged = data);
    this.httpService.getData('products').subscribe((data: Array<Product>) => this.store.dispatch(setProducts({ products: data })));
  }

  updateProduct(product: Product) {
    if (this.isLogged) {
      this.store.dispatch(updateProduct({ product: product }));
      this.httpService.updateData('products', product).subscribe(res => console.log(res));
    } else {
      this.router.navigate(['/login']);
    }
  }

}
