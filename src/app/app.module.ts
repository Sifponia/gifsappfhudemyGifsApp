import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import { GifsModule } from './gifs/gifs.module';
import {NavbarsModule} from './navbars/navbars.module';
import {SidebarModule} from './sidebar/sidebar.module';
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    NavbarsModule,
    SidebarModule,
    GifsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
