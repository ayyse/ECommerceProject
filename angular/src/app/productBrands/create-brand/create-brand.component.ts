import { ProductBrandServiceProxy } from './../../../shared/service-proxies/service-proxies';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductBrandDto } from '@shared/service-proxies/service-proxies';
import { finalize } from 'rxjs/operators';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-create-brand',
  templateUrl: './create-brand.component.html',
  styleUrls: ['./create-brand.component.css']
})
export class CreateBrandComponent implements OnInit {

  saving = false;
  brand: ProductBrandDto = new ProductBrandDto()
  brands: ProductBrandDto[] = []

  @Output() onSave = new EventEmitter<any>()

  constructor(
    private brandService: ProductBrandServiceProxy,
    public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  save(): void {
    this.saving = true;

    this.brandService
      .create(this.brand)
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
