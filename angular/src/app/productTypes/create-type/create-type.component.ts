import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductTypeDto, ProductTypeServiceProxy } from '@shared/service-proxies/service-proxies';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-create-type',
  templateUrl: './create-type.component.html',
  styleUrls: ['./create-type.component.css']
})
export class CreateTypeComponent implements OnInit {

  saving = false;
  type: ProductTypeDto = new ProductTypeDto()
  types: ProductTypeDto[] = []

  @Output() onSave = new EventEmitter<any>()

  constructor(
    private typeService: ProductTypeServiceProxy,
    public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  save(): void {
    this.saving = true;

    this.typeService
      .create(this.type)
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
