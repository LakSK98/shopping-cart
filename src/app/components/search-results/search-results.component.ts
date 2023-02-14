import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Product from 'src/app/models/product.model';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {
  constructor(private route: ActivatedRoute, private httpService: HttpService) { }
  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.httpService.getData(`products/search/${params['id']}`)
      .subscribe((data:Array<Product>) => this.productList = data);
    });
  }

  productList : Array<Product> = [];
}