import { ProductDto, ProductServiceProxy } from '@shared/service-proxies/service-proxies';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-user-product',
  templateUrl: './detail-user-product.component.html',
  styleUrls: ['./detail-user-product.component.css']
})
export class DetailUserProductComponent implements OnInit {

  product: ProductDto = new ProductDto()
  products: ProductDto[] = []

  constructor(private productService: ProductServiceProxy) { }

  ngOnInit(): void {
  }

  getProductDetail() {
    this.productService.getProduct(this.product.id).subscribe(response => {
      this.product = response
      console.log(this.product)
    })
  }



}
