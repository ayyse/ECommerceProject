
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductDto, ProductServiceProxy } from '@shared/service-proxies/service-proxies';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  saving = false;
  product: ProductDto = new ProductDto();
  id: number;

  @Output() onSave = new EventEmitter<any>();

  constructor(
    public productService: ProductServiceProxy,
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
    this.productService.get(this.id).subscribe((result: ProductDto) => {
      this.product = result;
    });
  }

  save(): void {
    this.saving = true;

    this.productService
      .update(this.product)
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
