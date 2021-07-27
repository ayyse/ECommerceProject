import { HttpClient } from '@angular/common/http';
import { IBasketItemDto, ICustomerBasketDto, IProductDto, ProductDto, ProductServiceProxy } from './../../../shared/service-proxies/service-proxies';
import { Injectable } from '@angular/core';
import { BasketItemDto, CustomerBasketDto, CustomerBasketServiceProxy } from '@shared/service-proxies/service-proxies';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerBasketService {

  private basketSource = new BehaviorSubject<ICustomerBasketDto>(null)
  basket$ = this.basketSource.asObservable()

  product: ProductDto = new ProductDto()

  productId: number

  constructor(
    private basketService: CustomerBasketServiceProxy,
    private http: HttpClient,
    private productService: ProductServiceProxy) { }

  // getBasket() {
  //   this.basketService.getBasket(this.basketId).subscribe(response => {
  //     this.basketSource.next(this.basket)
  //   })
  // }

  // setBasket(basket: ICustomerBasketDto) {
  //   return this.http.post()
  //   this.basketSource.next(basket)
  //   console.log(basket)
  // }

  getCurrentBasketValue() {
    return this.basketSource.value
  }

  getProduct() {
    this.productService.getProduct(this.productId).subscribe(response => {
      this.product = response
    })
  }

  addItemToBasket(item: IProductDto, quantity = 1) {
    if (this.getProduct) {
      const itemToAdd: IBasketItemDto = this.mapProductItemToBasketItem(item, quantity)
      const basket = this.getCurrentBasketValue() ?? this.createBasket()
      console.log('addItemToBasket=>', basket)
      basket.items = this.addOrUpdateItem(basket.items, itemToAdd, quantity)
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
    return items
  }

  private createBasket(): ICustomerBasketDto {
    const basket = new CustomerBasketDto()
    localStorage.setItem('id', basket.id)
    return basket
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
