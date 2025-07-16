import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '@shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "/auth/login",
    pathMatch: 'full'
  },
  { path: 'auth', loadChildren: () => import ('../features/auth/presentation/auth.module').then(m => m.AuthModule) },
  { path: 'menu', loadChildren: () => import ('../features/menu/presentation/menu.module').then(m => m.MenuModule) },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
