import { CustomerBasketDto, IBasketItemDto, ICustomerBasketDto, IProductDto, ProductDto, ProductServiceProxy } from './../../../shared/service-proxies/service-proxies';
import { Injectable } from '@angular/core';
import { CustomerBasketServiceProxy } from '@shared/service-proxies/service-proxies';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerBasketService {

  private basketSource = new BehaviorSubject<ICustomerBasketDto>(null)
  basket$ = this.basketSource.asObservable()

  product: ProductDto = new ProductDto()
  basket: CustomerBasketDto = new CustomerBasketDto()

  productId: number
  basketId: string

  constructor(private basketService: CustomerBasketServiceProxy) { }

  getBasket() {
    this.basketService.getBasket(this.basketId).subscribe(response => {
      this.basketSource.next(this.basket)
    })
  }

  setBasket(basket: ICustomerBasketDto) {
    return this.basketSource.next(basket)
  }

  getCurrentBasketValue() {
    return this.basketSource.value
  }

  addItemToBasket(item: IProductDto, quantity = 1) {
    if (item) {
      const itemToAdd: IBasketItemDto = this.mapProductItemToBasketItem(item, quantity)
      const basket = this.getCurrentBasketValue() || this.createBasket()
      console.log('addItemToBasket=>', basket)
      const items: IBasketItemDto[] = this.addOrUpdateItem(basket.items, itemToAdd, quantity)
      this.setBasket(basket)
    }
  }

  private addOrUpdateItem(items: IBasketItemDto[], itemToAdd: IBasketItemDto, quantity: number): IBasketItemDto[] {
    console.log('addOrUpdateItem=>', items);
    const index = items.findIndex((i) => i.id === itemToAdd.id)
    if (index === -1) {
      items.push(itemToAdd)
    }
    else {
      items[index].quantity += quantity
    }
    localStorage.setItem('basket', JSON.stringify(items))
    console.log(JSON.parse(localStorage.getItem('basket')))
    return items
  }

  private createBasket(): ICustomerBasketDto {
    this.basketService.update(this.basket).subscribe(response => {
      this.basket = response
      console.log("BASKET", this.basket)
    })
    localStorage.setItem('basket', this.basket.id)
    return this.basket
    // const basket = new CustomerBasketDto({id: '1', items: []})
    // localStorage.setItem('basket', JSON.stringify(basket))
    // console.log(JSON.parse(localStorage.getItem('basket')))
    // return basket
  }

  private mapProductItemToBasketItem(item: IProductDto, quantity: number): IBasketItemDto {
    return {
      id: item.id,
      tenantId: null,
      name: item.name,
      description: item.description,
      price: item.price,
      shipmentPrice: item.shipmentPrice,
      imageUrl: item.imageUrl,
      quantity,
      productTypeFk: item.productTypeFk,
      productBrandFk: item.productBrandFk,
      productColorFk: item.productColorFk
    };
  }
}
