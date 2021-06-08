import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntidadesRoutingModule } from './entidades-routing.module';
import { EntidadesComponent } from './entidades.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { CategoriaComponent } from './categoria/categoria.component';



@NgModule({
  declarations: [EntidadesComponent, CategoriaComponent],
  imports: [
    CommonModule,
    EntidadesRoutingModule,
    ReactiveFormsModule,
  ]
})
export class EntidadesModule { }
