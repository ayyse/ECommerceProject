import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDto, ProductServiceProxy } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-customer-product-details',
  templateUrl: './customer-product-details.component.html',
  styleUrls: ['./customer-product-details.component.css']
})
export class CustomerProductDetailsComponent implements OnInit {

  product: ProductDto = new ProductDto()
  products: ProductDto[] = []
  productId: number

  constructor(
    private productService: ProductServiceProxy,
    private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      this.productId = params['productId'];
      this.getProductDetail(this.productId);
    });

  }

  ngOnInit(): void {
  }

  getProductDetail(productId: number) {
    this.productService.getProduct(productId).subscribe(response => {
      this.product = response
    })
  }

}
