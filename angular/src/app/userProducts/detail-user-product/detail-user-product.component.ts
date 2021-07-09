import { ProductBrandDto, ProductDto, ProductServiceProxy } from '@shared/service-proxies/service-proxies';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-user-product',
  templateUrl: './detail-user-product.component.html',
  styleUrls: ['./detail-user-product.component.css']
})
export class DetailUserProductComponent implements OnInit {

  product: ProductDto = new ProductDto()
  brand: ProductBrandDto = new ProductBrandDto()
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
