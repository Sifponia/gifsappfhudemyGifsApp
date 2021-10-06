import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {NavbarsComponent} from "./navbars.component";
import {SidebarComponent} from "../sidebar/sidebar.component";


const routes: Routes = [
  {path: 'sidebar', component: SidebarComponent},

];


@NgModule({
  declarations: [
    NavbarsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    NavbarsComponent
  ]
})
export class NavbarsModule {
}
