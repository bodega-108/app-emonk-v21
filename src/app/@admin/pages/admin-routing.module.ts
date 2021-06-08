import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { VigilanteDobleGuard } from 'src/app/vigilante-doble.guard';
import { AdminComponent } from './admin.component';

const routes: Routes = [{
  path: 'admin',
  component: AdminComponent,
  canActivate:[VigilanteDobleGuard],
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
    {
      path: 'entidades',
      loadChildren : () => import('./entidades/entidades.module').then(m => m.EntidadesModule)
    },
    {
      path: 'categoria-form',
      loadChildren : () => import('./categoria-form/categoria-form.module').then(m => m.CategoriaFormModule)
    },
    {
      path: 'login',
      loadChildren : () => import('./forms/login/login.module').then(m => m.LoginModule)
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
