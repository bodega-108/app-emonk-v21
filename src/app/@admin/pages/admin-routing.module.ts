import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [{
  path: 'admin',
  component: AdminComponent,
  children: [
    {
      path: '',
      loadChildren : () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
      path: 'users',
      loadChildren : () => import('./users/users.module').then(m => m.UsersModule)
    },
    {
      path: 'generador',
      loadChildren : () => import('./generador/generador.module').then(m => m.GeneradorModule)
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
