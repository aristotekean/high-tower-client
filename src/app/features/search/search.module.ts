import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardsComponent } from './components/cards/cards.component';


@NgModule({
  declarations: [
    SearchComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SearchRoutingModule,
  ]
})
export class SearchModule { }
