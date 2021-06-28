import { Component, OnInit } from '@angular/core';
import { ProductDto, ProductServiceProxy } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product : ProductDto = new ProductDto()
  products: ProductDto[] = []


  constructor(private productService: ProductServiceProxy) { }

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe(response => {
      this.products = response
      console.log(this.products)
    })
  }

  deleteProduct(id : number){
    this.productService.delete(id).subscribe()
  }

  updateProduct(product : ProductDto){
    this.productService.update(product).subscribe(response => {
      this.product = response
    })
  }

}
