import { ProductBrandDto, ProductTypeDto, ProductBrandServiceProxy, ProductTypeServiceProxy } from './../../../shared/service-proxies/service-proxies';

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductDto, ProductServiceProxy } from '@shared/service-proxies/service-proxies';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  saving = false;
  product: ProductDto = new ProductDto()
  products: ProductDto[] = []
  brands: ProductBrandDto[] = []
  types: ProductTypeDto[] = []

  @Output() onSave = new EventEmitter<any>()

  constructor(
    public productService: ProductServiceProxy,
    public brandService: ProductBrandServiceProxy,
    public typeService: ProductTypeServiceProxy,
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
    this.getAllBrands()
    this.getAllTypes()
  }

  getAllBrands(){
    this.brandService.getAllBrands().subscribe(response => {
      this.brands = response
    })
  }

  getAllTypes(){
    this.typeService.getAllTypes().subscribe(response => {
      this.types = response
    })
  }

  save(): void {
    this.saving = true;

    this.productService
      .create(this.product)
      .pipe(
        finalize(() => {
          this.saving = false;
        })
      )
      .subscribe(() => {
        this.bsModalRef.hide();
        this.onSave.emit();
      });
  }

}
