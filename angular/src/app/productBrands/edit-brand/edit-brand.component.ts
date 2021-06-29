import { ProductBrandDto, ProductBrandServiceProxy } from './../../../shared/service-proxies/service-proxies';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-edit-brand',
  templateUrl: './edit-brand.component.html',
  styleUrls: ['./edit-brand.component.css']
})
export class EditBrandComponent implements OnInit {

  saving = false;
  brand: ProductBrandDto = new ProductBrandDto();
  id: number;

  @Output() onSave = new EventEmitter<any>();

  constructor(
    public brandService: ProductBrandServiceProxy,
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
    this.brandService.get(this.id).subscribe((result: ProductBrandDto) => {
      this.brand = result;
    });
  }

  save(): void {
    this.saving = true;

    this.brandService
      .update(this.brand)
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
