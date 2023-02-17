import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CartItem } from 'src/app/models/cart-item.model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  isLogged: boolean = false;

  constructor(
    private cartService: CartService,
    store: Store<{ isLogged: boolean }>,
    private readonly router: Router
  ) {
    store.select('isLogged').subscribe(data => this.isLogged = data);
  }

  cart: Array<CartItem> = [];

  ngOnInit() {
    this.cartService.items$.subscribe(res => this.cart = res.items);
  }

  onClickIncrement(id: number) {
    this.cartService.incrementCount(id);
  }

  onClickDecrement(id: number) {
    this.cartService.decrementCount(id);
  }

  onClickCheckout() {
    if (this.isLogged) {
      console.log("You have successfully checkedout cart");
    } else {
      this.router.navigate(['/login']).then(()=>location.reload());
    }
  }

}
