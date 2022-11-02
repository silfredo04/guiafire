import { Component, OnInit } from '@angular/core';
import {GaleriaService} from 'src/app/pages/galeria.service'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-api-galeria',
  templateUrl: './api-galeria.page.html',
  styleUrls: ['./api-galeria.page.scss'],
})
export class ApiGaleriaPage implements OnInit {

  res:Observable<any>;
  cargando: boolean = true;

  constructor(private galeriaService:GaleriaService) { }

  ngOnInit() {
    this.galeriaService.getGaleria().subscribe(respuesta => {
      this.res = respuesta;
      this.cargando = false;
      console.log(this.res);
    });
  }

}
