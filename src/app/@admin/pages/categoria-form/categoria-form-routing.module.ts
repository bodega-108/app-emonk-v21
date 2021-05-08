import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaFormComponent } from './categoria-form.component';

const routes: Routes = [

  {
    path: '',
    component: CategoriaFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaFormRoutingModule { }
