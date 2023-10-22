import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { FilterCountPipe } from './filter-count.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart.component';

@NgModule({
  declarations: [
    CartComponent,
    FilterCountPipe,

  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    ReactiveFormsModule
  ]
})
export class CartModule { }
