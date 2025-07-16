import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { MenuPage } from './pages/menu/menu.page';

const routes: Route[] = [
  { path: '', component: MenuPage }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MenuRoutingModule { }
