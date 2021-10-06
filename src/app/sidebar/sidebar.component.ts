import {Component, OnInit} from '@angular/core';
import {GitsServiceService} from '../gifs/service/gits-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private gitService: GitsServiceService) {
  }

  get getHistorial() {
    return this.gitService.historial;
  }

   buscargits(termino: string) {
    return this.gitService.buscargits(termino)
  }


  ngOnInit(): void {
  }

}
