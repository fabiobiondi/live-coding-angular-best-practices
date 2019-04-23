import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'catalog', loadChildren: './features/catalog/catalog.module#CatalogModule'},
  { path: 'login', loadChildren: './features/login/login.module#LoginModule'},
  { path: 'users', loadChildren: './features/users/users.module#UsersModule'},
  { path: '**', redirectTo: 'catalog' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
