import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/services/autenticacion/auth.service';
import { EventService } from 'src/app/services/event/event.service';
import {
  ToastController,
  LoadingController,
  NavController
} from "@ionic/angular";
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  res:any = {};
  login:boolean = false;
  rol:'visitante'|'coordinadores'='visitante';

  Menus:any=[
    {
      id:"1",
      titulo:"Musica",
      imagen:"../assets/img/musica.jpg",
      ruta:"home"
    },
    {
      id:"2",
      titulo:"Cantantes",
      imagen:"../assets/img/cantante.jpg",
      ruta:"api-cantantes"
    },
    {
      id:"3",
      titulo:"Galeria",
      imagen:"../assets/img/galeria.jpg",
      ruta:"api-galeria"
    },
    {
      id:"4",
      titulo:"Recording_studios",
      imagen:"../assets/img/recordin.jpg",
      ruta:"recording-studios"
    },
    {
      id:"5",
      titulo:"Event",
      imagen:"../assets/img/event.jpg",
      ruta:"event"
    }
  ];

  Menuscordinador:any=[
    {
      id:"1",
      titulo:"Musica",
      imagen:"../assets/img/musica.jpg",
      ruta:"home"
    },
    {
      id:"2",
      titulo:"Cantantes",
      imagen:"../assets/img/cantante.jpg",
      ruta:"api-cantantes"
    },
    {
      id:"3",
      titulo:"Galeria",
      imagen:"../assets/img/galeria.jpg",
      ruta:"api-galeria"
    },
    {
      id:"4",
      titulo:"Recording_studios",
      imagen:"../assets/img/recordin.jpg",
      ruta:"recording-studios"
    },
    {
      id:"5",
      titulo:"Event",
      imagen:"../assets/img/event.jpg",
      ruta:"event"
    },
    {
      id:"6",
      titulo:"Event all",
      imagen:"../assets/img/eventall.jpg",
      ruta:"eventall"
    }
  ];

  constructor(
    private authService:AuthService,
    private loadingCtrl: LoadingController,
    private router:Router,
    private eventService:EventService
  ) { 
    this.eventService.obtenerPerfil().then((data) => {
      this.res = data;
      console.log(this.res);
    });
  }


  async cerrarSesion() {
    const loading = await this.loadingCtrl.create({ message: 'Cerrando Sesión!!' })
    this.authService.logoutUser().then(() => {
      loading.dismiss().then(() => {
        this.router.navigateByUrl('login');
      })
    },
    error => {
      console.error(error)
    }
    )
    return await loading.present()
  }

  ngOnInit() {
  }

}
