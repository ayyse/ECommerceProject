import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductDto, ProductServiceProxy } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product : ProductDto = new ProductDto()
  products: ProductDto[] = []
  productAddForm : FormGroup

  constructor(
    private productService: ProductServiceProxy,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createProductAddForm()
  }

  createProductAddForm(){
    this.productAddForm = this.formBuilder.group({
      name : ["", Validators.required],
      description : ["", Validators.required],
      brand : ["", Validators.required],
      color : ["", Validators.required],
      price : ["", Validators.required],
      shipmentPrice : ["", Validators.required],
    })
  }

  createProduct(product : ProductDto){
    this.productService.create(product).subscribe(response => {
      this.product = response
    })
  }

}
