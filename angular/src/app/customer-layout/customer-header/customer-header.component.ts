import { ProductDto, ProductServiceProxy } from './../../../shared/service-proxies/service-proxies';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-header',
  templateUrl: './customer-header.component.html',
  styleUrls: ['./customer-header.component.css']
})
export class CustomerHeaderComponent implements OnInit {

  productName = ''
  products = []
  product: ProductDto
  states: any

  constructor(private productService: ProductServiceProxy) {
  }

  ngOnInit(): void {

  }

  searchButton(){
    this.productService.get(this.product.id).subscribe(response => {
      if(response){
        this.states = Object.entries(response);
        this.states.forEach((state) => {
          state[1].forEach(product => this.products.push(product + ', ' + state[0]));
        })
      }
    })
  }
}
