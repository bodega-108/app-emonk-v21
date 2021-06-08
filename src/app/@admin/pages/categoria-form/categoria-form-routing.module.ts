import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaFormComponent } from './categoria-form.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';


const routes: Routes = [

  {
    path: '',
    component: CategoriaFormComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [RouterModule]
})
export class CategoriaFormRoutingModule { }
