import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from "./sidebar.component";
import {GifsModule} from "../gifs/gifs.module";


@NgModule({
  declarations: [
    SidebarComponent
  ],
    imports: [
        CommonModule,
        GifsModule
    ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule {
}
