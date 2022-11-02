import { Component, OnInit } from '@angular/core';
import {CantanteService} from 'src/app/pages/cantante.service'
import{Observable}from "rxjs";
import{ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-api-detalle-cantantes',
  templateUrl: './api-detalle-cantantes.page.html',
  styleUrls: ['./api-detalle-cantantes.page.scss'],
})
export class ApiDetalleCantantesPage implements OnInit {
  informacion:Observable<any>;
  constructor(private cantanteService:CantanteService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    let id= this.activatedRoute.snapshot.paramMap.get('id');
    this.cantanteService.getDetalles(id).subscribe(res =>{this.informacion=res;});
  }

}
