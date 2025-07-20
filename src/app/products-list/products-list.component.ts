import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-products-list',
  standalone: false,
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  products: Product[] = [{
  name: "Latex Blanco",
  price: 15000,
  stock: 10,
  image: "assets/img/latex-blanco.png",
  quantity: 0
  }
  , {
  name: "Rodillo",
  price: 8000,
  stock: 0,
  image: "assets/img/rodillo.jpg",
  quantity: 0
  }
  , {
  name: "Pincel",
  price: 5500,
  stock: 0,
  image: "assets/img/pincel.jpg",
  quantity: 0
  }
  , {
  name: "Esmalte Sintético Blanco",
  price: 20000,
  stock: 5,
  image: "assets/img/esmalte-sintetico-blanco.jpg",
  quantity: 0
  }
  ];
  
  maxReached(message: string){
    alert(message);
  }


}

