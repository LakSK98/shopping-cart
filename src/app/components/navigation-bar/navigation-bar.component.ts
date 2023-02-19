import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {

  constructor(
    private readonly router: Router,
    private readonly cartService: CartService,
    private readonly authService: AuthService,
    private readonly loginStore : Store<{login:boolean}>
  ) { }

  search = '';
  showBasket = false;
  count = 0;
  showLogOut = false;

  ngOnInit() {
    this.cartService.items$.subscribe(res => this.count = res.count);
    this.loginStore.select('login').subscribe(res=>this.showLogOut=res);
  }

  onSearch() {
    this.router.navigate(['/search' ,this.search]);
  }

  onLogOut() {
    this.authService.logOut();
  }

  onClickLogin(){
    this.router.navigate(['/login']);
  }

  goToHome(){
    this.router.navigate(['/home']);
  }
}
