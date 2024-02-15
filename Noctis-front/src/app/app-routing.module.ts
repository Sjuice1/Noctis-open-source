import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'', redirectTo:'main', pathMatch:'full'},
  {path : 'main', loadChildren: () => import('./main/main.module').then(m=>m.MainModule)},
  {path : 'auth', loadChildren: () => import('./auth/auth.module').then(m=>m.AuthModule)},
  {path : 'new', loadChildren: () => import('./new/new.module').then(m=>m.NewModule)},
  {path : 'orders', loadChildren: () => import('./orders/orders.module').then(m=>m.OrdersModule)}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
