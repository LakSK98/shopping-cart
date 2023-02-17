import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { RegistrationComponent } from './components/registration/registration.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatGridListModule } from '@angular/material/grid-list';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { CartComponent } from './components/cart/cart.component';
import { MatListModule } from '@angular/material/list';
import { CartStoreModule } from './store/store.module';
import { ProductRatingComponent, ProductRatingPopup } from './components/product-rating/product-rating.component';
import { MatDialogModule } from '@angular/material/dialog';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RegistrationComponent,
    ProductCardComponent,
    HomepageComponent,
    NavigationBarComponent,
    SearchResultsComponent,
    CartComponent,
    ProductRatingComponent,
    ProductRatingPopup,
    StarRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    HttpClientModule,
    MatToolbarModule,
    MatBadgeModule,
    MatGridListModule,
    MatListModule,
    CartStoreModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
