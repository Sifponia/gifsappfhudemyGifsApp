import {Component, OnInit} from '@angular/core';
import {GitsServiceService} from "../service/gits-service.service";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  get resultadoGits() {
    return this.gitServices.resultados;
  }

  constructor(private gitServices: GitsServiceService) {
  }

  ngOnInit(): void {
  }

}
