import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneradorComponent } from './generador.component';

const routes: Routes = [
  {
    path: '',
    component: GeneradorComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneradorRoutingModule { }
