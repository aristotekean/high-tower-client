import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchModule } from './search/search.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SearchModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchModule
  ]
})
export class FeaturesModule { }
