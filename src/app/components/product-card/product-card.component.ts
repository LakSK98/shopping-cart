import { Component, Input } from '@angular/core';
import Product from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  constructor(private cartService:CartService){}

  @Input() product : Product = {
    id: 0,
    title: '',
    subTitle: '',
    description: '',
    image: '',
    price: 0,
    totalRating: 0,
    noOfRatings: 0
  };

  addToCart(item:Product){
    this.cartService.addToCart(item);
  }

}
