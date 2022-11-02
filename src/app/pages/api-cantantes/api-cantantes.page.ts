import { Component, OnInit } from '@angular/core';
import {CantanteService} from 'src/app/pages/cantante.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-api-cantantes',
  templateUrl: './api-cantantes.page.html',
  styleUrls: ['./api-cantantes.page.scss'],
})
export class ApiCantantesPage implements OnInit {

  res:Observable<any>;
  cargando: boolean = true;

  constructor(private cantanteService:CantanteService ) { 
    this.cantanteService.getCantantes().subscribe(respuesta => {
      this.res = respuesta;
      this.cargando = false;
      console.log(this.res);
    });
  }

  ngOnInit() {
  }

}
