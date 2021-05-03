import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneradorRoutingModule } from './generador-routing.module';
import { GeneradorComponent } from './generador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [GeneradorComponent],
  imports: [
    CommonModule,
    GeneradorRoutingModule,
    ReactiveFormsModule
  ]
})
export class GeneradorModule { }
