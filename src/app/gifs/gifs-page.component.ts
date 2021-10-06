import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GitsServiceService} from "./service/gits-service.service";

@Component({
  selector: 'app-gifs-page',
  templateUrl: './gifs-page.component.html',
  styleUrls: ['./gifs-page.component.css']
})
export class GifsPageComponent implements OnInit {

  @ViewChild('txtbuscar') txtbuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GitsServiceService) {
  }

  ngOnInit(): void {
  }

  buscar() {
    const texto = this.txtbuscar.nativeElement.value;

    if (texto.trim().length == 0){return;}

    this.gifsService.buscargits(texto);
    this.txtbuscar.nativeElement.value = '';

  }
}
