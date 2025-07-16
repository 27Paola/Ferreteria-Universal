import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuRoutingModule } from "./menu-routing.module";

import { MenuPage } from "./pages/menu/menu.page";
import { ReactiveFormsModule } from "@angular/forms";
import { ImageModule } from "primeng/image";

import { InputTextModule } from "primeng/inputtext";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CheckboxModule } from "primeng/checkbox";
import { MenuInteractor } from "@menu/core/interactor/menu.interactor";

@NgModule({
  declarations: [
    MenuPage
  ],
  exports: [
    MenuPage
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    CheckboxModule,
    ImageModule
  ],
  providers: [
    MenuInteractor
  ]
})

export class MenuModule { }
