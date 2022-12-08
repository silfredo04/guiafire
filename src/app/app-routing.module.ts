import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'cargando',
    pathMatch: 'full'
  },
  {
    path: 'create',
    loadChildren: () => import('./pages/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./pages/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./pages/edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'api-cantantes',
    loadChildren: () => import('./pages/api-cantantes/api-cantantes.module').then( m => m.ApiCantantesPageModule)
  },
  {
    path: 'api-galeria',
    loadChildren: () => import('./pages/api-galeria/api-galeria.module').then( m => m.ApiGaleriaPageModule)
  },
  {
    path: 'recording-studios',
    loadChildren: () => import('./pages/recording-studios/recording-studios.module').then( m => m.RecordingStudiosPageModule)
  },
  {
    path: 'api-detalle-cantantes/:id',
    loadChildren: () => import('./pages/api-detalle-cantantes/api-detalle-cantantes.module').then( m => m.ApiDetalleCantantesPageModule)
  },
  {
    path: 'api-detalle-galeria/:id',
    loadChildren: () => import('./pages/api-detalle-galeria/api-detalle-galeria.module').then( m => m.ApiDetalleGaleriaPageModule)
  },
  {
    path: 'recording-create',
    loadChildren: () => import('./pages/recording-create/recording-create.module').then( m => m.RecordingCreatePageModule)
  },
  {
    path: 'recording-detail/:id',
    loadChildren: () => import('./pages/recording-detail/recording-detail.module').then( m => m.RecordingDetailPageModule)
  },
  {
    path: 'recording-edit/:id',
    loadChildren: () => import('./pages/recording-edit/recording-edit.module').then( m => m.RecordingEditPageModule)
  },
  {
    path: 'recording-delete/:id',
    loadChildren: () => import('./pages/recording-delete/recording-delete.module').then( m => m.RecordingDeletePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/autenticacion/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'recover',
    loadChildren: () => import('./pages/autenticacion/recover/recover.module').then( m => m.RecoverPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/autenticacion/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'cargando',
    loadChildren: () => import('./cargando/cargando.module').then( m => m.CargandoPageModule)
  },
  {
    path: 'event-create',
    loadChildren: () => import('./pages/event-create/event-create.module').then( m => m.EventCreatePageModule)
  },
  {
    path: 'event-detail/:id',
    loadChildren: () => import('./pages/event-detail/event-detail.module').then( m => m.EventDetailPageModule)
  },
  {
    path: 'event-list',
    loadChildren: () => import('./pages/event-list/event-list.module').then( m => m.EventListPageModule)
  },
  {
    path: 'event',
    loadChildren: () => import('./pages/event/event.module').then( m => m.EventPageModule)
  },
  {
    path: 'register-coordenadores',
    loadChildren: () => import('./pages/register-coordenadores/register-coordenadores.module').then( m => m.RegisterCoordenadoresPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
