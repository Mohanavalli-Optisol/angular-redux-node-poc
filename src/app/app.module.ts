import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputUserDataFormComponent } from './input-user-data-form/input-user-data-form.component';
import { DisplayUserDataComponent } from './display-user-data/display-user-data.component';
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
// import { StoreModule } from '@ngrx/store';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ShopReducer, InitialState, initialState } from './store/reducer';

const routes: Routes = [
  {
    path: '', 
    component: InputUserDataFormComponent,
  },
  {
    path: 'user/:uid',
    component: DisplayUserDataComponent

  },
 
];
@NgModule({
  declarations: [
    AppComponent,
    InputUserDataFormComponent,
    DisplayUserDataComponent,
    HomeComponent,
    HeaderComponent,
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgReduxModule,
    // RouterModule.forRoot(routes),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<InitialState>) {
    ngRedux.configureStore(ShopReducer, initialState);
  }
 }

