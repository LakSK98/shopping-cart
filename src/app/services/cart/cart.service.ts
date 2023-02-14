import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import Product from 'src/app/models/product.model';
import { addToCart as ATC, incrementItem, decrementItem } from 'src/app/store/cart/cart.actions';
import { CartState } from 'src/app/store/cart/cart.reducer';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items$ : Observable<CartState>;
  
  constructor(private store: Store<{cart:CartState}>) { 
    this.items$ = store.select('cart');
  }

  addToCart(product:Product){
    this.store.dispatch(ATC({item:product}));
  }

  incrementCount(id:number){
    this.store.dispatch(incrementItem({id}));
  }

  decrementCount(id:number){
    this.store.dispatch(decrementItem({id}));
  }

  clearCart(){
    
  }
  
  removeFromCart(id:number){
    
  }

}
