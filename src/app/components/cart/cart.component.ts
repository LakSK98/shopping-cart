import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CartItem } from 'src/app/models/cart-item.model';
import OrderData from 'src/app/models/order-data.model';
import { CartService } from 'src/app/services/cart/cart.service';
import { HttpService } from 'src/app/services/http/http.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  isLogged: boolean = false;

  constructor(
    private cartService: CartService,
    store: Store<{ login: boolean, cart: Array<CartItem> }>,
    private readonly router: Router,
    private readonly userService: UserService,
    private readonly httpService: HttpService
  ) {
    store.select('login').subscribe(data => this.isLogged = data);
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
      const orderData: OrderData = {
        amount: 0,
        discount: 0,
        orderItems: [],
        userId: 0
      }
      this.cart.map(item => {
        orderData.amount += item.price;
        orderData.orderItems.push({
          discount: 0,
          title: item.title,
          price: item.price,
          productId: +item.id
        });
      });
      orderData.userId = this.userService.userData ? +this.userService.userData.id : 0;
      this.httpService.postData('order', orderData).subscribe(res=>{
        if(res.state){
          this.cartService.clearCart();
        }
      });
    } else {
      this.router.navigate(['/login']).then(() => location.reload());
    }
  }

}
