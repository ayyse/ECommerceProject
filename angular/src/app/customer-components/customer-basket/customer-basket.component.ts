import { BehaviorSubject } from 'rxjs';
import { BasketItemDto, CustomerBasketDto, IRoleDto, ProductDto } from './../../../shared/service-proxies/service-proxies';
import { Component, Input, OnInit } from '@angular/core';
import { CustomerBasketServiceProxy } from '@shared/service-proxies/service-proxies';
import { map } from 'rxjs/operators'
import { CustomerProductsComponent } from '../customer-products/customer-products.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-customer-basket',
  templateUrl: './customer-basket.component.html',
  styleUrls: ['./customer-basket.component.css']
})
export class CustomerBasketComponent implements OnInit {

  // product: ProductDto = new ProductDto()

  @Input() item: BasketItemDto

  product: ProductDto = new ProductDto()
  basketList: BasketItemDto[] = []
  basket: CustomerBasketDto = new CustomerBasketDto()
  basketId: string

  // private basketSource = new BehaviorSubject<CustomerBasketDto>(null)
  // basket$ = this.basketSource.asObservable()

  constructor(private basketService: CustomerBasketServiceProxy, private _modalService: BsModalService) { }

  ngOnInit(): void {
    this.getBasket()
  }

  getBasket() {
    this.basketService.getBasket(this.basketId).subscribe(response => {
      this.basket = response
      console.log(this.basket)
    })
  }

  clearBasket() {
    this.basketList.splice(0, this.basketList.length);
  }

  removeProductBasket(product: ProductDto) {
    var productContains = this.basketList.find(p => p.product.id == product.id);
    if (productContains) {
      var productIndexNo = -1;
      productIndexNo = this.basketList.indexOf(productContains);
      if (productIndexNo != -1)
        this.basketList.splice(productIndexNo, 1);
    }
  }

  addBasket(): void {
    this.showAddBasketModal();
  }

  showAddBasketModal(id?: number): void {
    let addModal: BsModalRef;
    addModal = this._modalService.show(
      CustomerProductsComponent,
      {
        class: 'modal-lg',
      }
    );
  }


}
