import { BasketItemDto, BasketItemServiceProxy, ProductDto } from './../../../shared/service-proxies/service-proxies';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { getuid } from 'process';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-basket',
  templateUrl: './customer-basket.component.html',
  styleUrls: ['./customer-basket.component.css']
})
export class CustomerBasketComponent implements OnInit {

  item: BasketItemDto
  product: ProductDto

  id: string

  basketList: BasketItemDto[] = []

  constructor(
    private basketService: BasketItemServiceProxy,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.addToBasket(this.id);
    });
  }


  addToBasket(id: string){
    this.basketService.getItem(id).subscribe(response => {
      this.item = response
      console.log("adding new item", this.basketList)
    })
  }


}


