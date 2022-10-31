import { ActionTypes } from './actions';
import { Product } from '../product/product.component';
// import { Action } from '@ngrx/store'

export interface InitialState {
  items: Array<Product>;
  cart: Array<Product>;
  fav: Array<Product>;
}

export const initialState = {
  items: [],
  cart: [],
  fav:[]
};


export function ShopReducer(state = initialState, action) {
  console.log(action.type, ActionTypes)
  switch (action.type) {
    case ActionTypes.LoadSuccess:
      return {
        ...state,
        items: [...action.payload]
      };

    case ActionTypes.Add:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };

    case ActionTypes.Remove:
      return {
        ...state,
        cart: [...state.cart.filter(item => item.name !== action.payload.name)]
      };

      case ActionTypes.AddFav:
      return {
        ...state,
        fav: [...state.fav, action.payload]
      };

    case ActionTypes.RemoveFav:
      return {
        ...state,
        fav: [...state.fav.filter(item => item.name !== action.payload.name)]
      };
    
    default:
      return state;
  }
}
