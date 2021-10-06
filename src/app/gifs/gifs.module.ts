import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page.component';
import { ResultComponent } from './result/result.component';
import {GitsServiceService} from "./service/gits-service.service";



@NgModule({
  declarations: [
    GifsPageComponent,
    ResultComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GifsPageComponent
  ],
  providers:[
    GitsServiceService
  ]
})
export class GifsModule { }
