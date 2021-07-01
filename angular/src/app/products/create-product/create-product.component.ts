
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

  @Output() onSave = new EventEmitter<any>()

  constructor(
    public productService: ProductServiceProxy,
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
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
