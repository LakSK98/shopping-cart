import { Component, OnInit } from '@angular/core';
import Product from 'src/app/models/product.model';
import { HttpService } from 'src/app/services/http/http.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private httpService:HttpService, private userService: UserService){}

  productList : Array<Product> = [];
  
  ngOnInit(){
    this.httpService.getData('products').subscribe((data:Array<Product>)=>this.productList=data);
    console.log(this.userService.userData);
  }

}