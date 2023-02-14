import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {

  constructor(private router: Router, private cartService: CartService) { }

  search = '';
  showBasket = false;
  count = 0;

  ngOnInit() {
    this.cartService.items$.subscribe(res=>this.count=res.count);
  }

  onSearch() {
    this.router.navigate(['/search', this.search]);
  }
}
