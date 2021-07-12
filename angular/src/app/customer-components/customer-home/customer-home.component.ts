import { ProductServiceProxy, ProductDto } from './../../../shared/service-proxies/service-proxies';
import { Component, OnInit } from '@angular/core';
import { ProductTypeDto, ProductTypeServiceProxy } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {

  types: ProductTypeDto[] = []
  products: ProductDto[] = []

  constructor(
    private typeService: ProductTypeServiceProxy,
    private productService: ProductServiceProxy) { }

  ngOnInit(): void {
    this.getAllTypes()
  }

  getAllTypes() {
    this.typeService.getAllTypes().subscribe(response => {
      this.types = response
      console.log(this.types)
    })
  }

  getAllProductsByTypeId(productTypeId: number) {
    this.productService.getAllProductsByType(productTypeId).subscribe(response => {
      this.products = response
      console.log(this.products)
    })
  }

}
