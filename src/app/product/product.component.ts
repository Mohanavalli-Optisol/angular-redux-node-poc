import { Component, Input, OnInit } from '@angular/core';
import { AddToCart, RemoveFromCart, AddToFav, RemoveFromFav } from '../store/actions';
import { NgRedux } from '@angular-redux/store';
import { InitialState } from '../store/reducer';

export interface Product {
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface FavProduct {
  name: string;
  price: number;
  description: string;
  image: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  constructor(private ngRedux: NgRedux<InitialState>) {}

  inCart = false;
  inFav = false;
  @Input() product: Product;
  @Input() fav_product: FavProduct;

  addToCart(item: Product) {
      this.ngRedux.dispatch(AddToCart(item));
      this.inCart = true;
  }

  removeFromCart(item: Product) {
    this.ngRedux.dispatch(RemoveFromCart(item));
    this.inCart = false;
  }

  addToFav(item: FavProduct) {
    this.ngRedux.dispatch(AddToFav(item));
    this.inFav = true;
  }

  removeFromFav(item: FavProduct) {
    this.ngRedux.dispatch(RemoveFromFav(item));
    this.inFav = false;
  }

  ngOnInit() {}
}
