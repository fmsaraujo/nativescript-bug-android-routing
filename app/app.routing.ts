import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

const routes: Routes = [
  { path: "", redirectTo: "/item", pathMatch: "full" },
  {
    path: "item",
    children: [
      { path: ':id', component: ItemDetailComponent },
      { path: '', component: ItemsComponent },
    ]
  }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes, { enableTracing: true })],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
