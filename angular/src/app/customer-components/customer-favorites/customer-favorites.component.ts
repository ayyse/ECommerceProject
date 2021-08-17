import { FavoriteDto, FavoriteServiceProxy } from './../../../shared/service-proxies/service-proxies';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-favorites',
  templateUrl: './customer-favorites.component.html',
  styleUrls: ['./customer-favorites.component.css']
})
export class CustomerFavoritesComponent implements OnInit {

  favId: string
  fav: FavoriteDto = new FavoriteDto()
  favorites: FavoriteDto[] = []

  constructor(private favoriteService: FavoriteServiceProxy) { }

  ngOnInit(): void {
    this.getAllFavorites()
  }

  addToFavorites() {
    this.favoriteService.getFavorite(this.favId).subscribe(response => {
      this.fav = response
    })
  }

  getAllFavorites() {
    this.favoriteService.getAllFavorites().subscribe(response => {
      this.favorites = response
      console.log("favs", this.favorites)
    })
  }

}
