import { Component, OnInit } from '@angular/core';
import { GetItems } from '../store/actions';
import { Product } from '../product/product.component';
import { NgRedux, select } from '@angular-redux/store';
import { InitialState } from '../store/reducer';
import { FruitsService } from '../fruits.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private ngRedux: NgRedux<InitialState>,
    private fruitService: FruitsService
  ) {}
  @select('items') items$: Observable<Array<Product>>;

  banners = [
    {
      src:
        'https://picsum.photos/id/1002/4312/2868',
      alt: 'A tasty treat'
    },
    {
      src:
        'https://picsum.photos/id/1003/1181/1772',
      alt: 'Chocolate covered pancakes'
    },
    {
      src:
        'https://picsum.photos/id/101/2621/1747',
      alt: 'Burger and fries'
    },
    {
      src:
        'https://picsum.photos/id/1019/5472/3648',
      alt: 'Get ready to slice'
    }
  ];

  ngOnInit() {
    this.fruitService.getAll();
  }
}
