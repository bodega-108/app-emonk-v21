import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaFormRoutingModule } from './categoria-form-routing.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CategoriaFormRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CategoriaFormModule { }
