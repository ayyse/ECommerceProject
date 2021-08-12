import { FavoriteDto, ProductDto, IFavoriteDto, IProductDto } from './../../../shared/service-proxies/service-proxies';
import { ProductServiceProxy } from '@shared/service-proxies/service-proxies';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-favorites',
  templateUrl: './customer-favorites.component.html',
  styleUrls: ['./customer-favorites.component.css']
})
export class CustomerFavoritesComponent implements OnInit {

  @Input() product: ProductDto
  favorites: IFavoriteDto[] = []

  constructor(private productService: ProductServiceProxy) { }

  ngOnInit(): void {
  }

  addToFavorite(item: IProductDto, quantity: number) {
    const itemToAdd: IFavoriteDto = this.mapProductItemToFavoriteItem(item, quantity)
    const index = this.favorites.findIndex((i) => i.id === itemToAdd.id)
    if (index === -1) {
      this.favorites.push(itemToAdd)
    }
    console.log("favori ürün", itemToAdd)
  }

  mapProductItemToFavoriteItem(item: IProductDto, quantity: number): IFavoriteDto {
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
    }
  }

}
