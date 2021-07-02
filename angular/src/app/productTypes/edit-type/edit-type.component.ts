import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductTypeDto, ProductTypeServiceProxy } from '@shared/service-proxies/service-proxies';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-edit-type',
  templateUrl: './edit-type.component.html',
  styleUrls: ['./edit-type.component.css']
})
export class EditTypeComponent implements OnInit {

  saving = false;
  type: ProductTypeDto = new ProductTypeDto();
  id: number;

  @Output() onSave = new EventEmitter<any>();

  constructor(
    public typeService: ProductTypeServiceProxy,
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
    this.typeService.get(this.id).subscribe((result: ProductTypeDto) => {
      this.type = result;
    });
  }

  save(): void {
    this.saving = true;

    this.typeService
      .update(this.type)
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
