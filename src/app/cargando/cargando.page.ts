import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cargando',
  templateUrl: './cargando.page.html',
  styleUrls: ['./cargando.page.scss'],
})
export class CargandoPage implements OnInit {

  cargando: boolean = false;
  
  constructor(
    private router:Router
  ) { }

  ngOnInit() {
    this.cargando = true;
    if(this.cargando){
      this.router.navigateByUrl('login')
    }
  }

}
