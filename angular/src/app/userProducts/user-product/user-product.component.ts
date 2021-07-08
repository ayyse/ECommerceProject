import { ProductBrandDto, ProductBrandServiceProxy, ProductDto, ProductServiceProxy } from '@shared/service-proxies/service-proxies';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-product',
  templateUrl: './user-product.component.html',
  styleUrls: ['./user-product.component.css']
})
export class UserProductComponent implements OnInit {

  products: ProductDto[] = []
  product: ProductDto = new ProductDto()
  brands: ProductBrandDto[] = []

  constructor(
    private productService: ProductServiceProxy,
    private brandService: ProductBrandServiceProxy) { }

  ngOnInit(): void {
    this.getAllProducts()
    this.getAllBrands()
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe(response => {
      this.products = response
    })
  }

  getAllBrands() {
    this.brandService.getAllBrands().subscribe(response => {
      this.brands = response
    })
  }

  getAllProductsByBrandId(productBrandId: number) {
    this.productService.getAllProductsByBrand(productBrandId).subscribe(response => {
      this.products = response
    })
  }



}
