import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearLibroComponent } from './pages/crear-libro/crear-libro.component';
import { LibroComponent } from './pages/libro/libro.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [{
  path: 'libro',
  component: LibroComponent,
  },
  {
    path: '',
    component: PagesComponent,

    children:[{
      path:'libro/crear' ,
      component: CrearLibroComponent
    },
      {path: '',    pathMatch: 'full', redirectTo: 'libro' },
      {path: '**',  pathMatch: 'full', redirectTo: 'libro'}
    ],

    },
    {path: '',    pathMatch: 'full', redirectTo: 'libro' },
    {path: '**',  pathMatch: 'full', redirectTo: 'libro'}

]

  @NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
