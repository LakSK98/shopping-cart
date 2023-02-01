import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  productList = [
    {
      title: "Adidas BackPack",
      subTitle:"Bag",
      image:'https://assets.adidas.com/images/w_600,f_auto,q_auto/abe3a78ccfe34bacb6d0ad5600ee3f3a_9366/Adicolor_Backpack_Black_H35596_01_standard.jpg',
      price:100,
      rating:2
    },
    {
      title: "Adidas Travelling",
      subTitle:"Bag",
      image:'https://static-01.daraz.lk/p/8a4a52d293fb0155279b3308f84cac04.jpg',
      price:100,
      rating:2
    },
    {
      title: "Caltex Watch",
      subTitle:"Watch",
      image:'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/2_a25aff7a-b5c4-4565-a111-6e1ce2d5b5f0.png?v=1624268771',
      price:100,
      rating:2
    },
    {
      title: "Samsung Smart",
      subTitle:"TV",
      image:'https://www.jungle.lk/wp-content/uploads/2021/09/Panasonic-32-Android-Smart-TV-TH-32JS650N.jpg',
      price:100,
      rating:2
    },
    {
      title: "Nike 2524",
      subTitle:"Shoes",
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-V_ptcyGi2wozeN-FynBi0EkLydWVxq1u5deILW5w18yBd6zzrEVys0hWwnt32k5sUEI&usqp=CAU',
      price:100,
      rating:2
    }

    ,
    {
      title: "Adidas Travelling",
      subTitle:"Bag",
      image:'https://static-01.daraz.lk/p/8a4a52d293fb0155279b3308f84cac04.jpg',
      price:100,
      rating:2
    },
    {
      title: "Caltex Watch",
      subTitle:"Watch",
      image:'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/2_a25aff7a-b5c4-4565-a111-6e1ce2d5b5f0.png?v=1624268771',
      price:100,
      rating:2
    },
    {
      title: "Samsung Smart",
      subTitle:"TV",
      image:'https://www.jungle.lk/wp-content/uploads/2021/09/Panasonic-32-Android-Smart-TV-TH-32JS650N.jpg',
      price:100,
      rating:2
    },
    {
      title: "Nike 2524",
      subTitle:"Shoes",
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-V_ptcyGi2wozeN-FynBi0EkLydWVxq1u5deILW5w18yBd6zzrEVys0hWwnt32k5sUEI&usqp=CAU',
      price:100,
      rating:2
    }
  ]
}
