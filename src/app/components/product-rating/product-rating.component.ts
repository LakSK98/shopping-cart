import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Product from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product/product.service';
import { StarRatingColor } from '../star-rating/star-rating.component';

@Component({
  selector: 'app-product-rating',
  templateUrl: './product-rating.component.html',
  styleUrls: ['./product-rating.component.css']
})
export class ProductRatingComponent {

  constructor(public dialog: MatDialog) { 
    this.clickRating.emit(this.openDialog);
    console.log(this.clickRating);
  }

  @Input("product") product: Product = {
    id: 0,
    title: '',
    subTitle: '',
    description: '',
    image: '',
    price: 0,
    totalRating: 0,
    noOfRatings: 0
  }

  @Output() clickRating = new EventEmitter();

  openDialog = () => {
    const dialogRef = this.dialog.open(ProductRatingPopup, {
      data: this.product,
      maxWidth: 700,
      panelClass: 'container'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'product-rating-popup',
  templateUrl: 'product-rating-popup.component.html',
  styleUrls: ['product-rating-popup.component.css'],
})
export class ProductRatingPopup {
  
  rating: number = 3;
  starCount: number = 5;
  starColor: StarRatingColor = StarRatingColor.accent;
  starColorP: StarRatingColor = StarRatingColor.primary;
  starColorW: StarRatingColor = StarRatingColor.warn;
  constructor(@Inject(MAT_DIALOG_DATA) public data: Product, private readonly productService: ProductService) { }

  onRatingChanged(rating: number) {
    console.log(rating);
    this.rating = rating;
  }

  onClickSubmit(){
    const updatedProduct = {
      ...this.data, 
      noOfRatings: this.data.noOfRatings + 1 ,
      totalRating: this.data.totalRating + this.rating
    }
    this.productService.updateProduct(updatedProduct);
  }

}
