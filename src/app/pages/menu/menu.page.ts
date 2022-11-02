import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

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
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
