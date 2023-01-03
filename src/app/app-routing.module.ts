import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliotecaComponent } from './pages/biblioteca/biblioteca.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [{
  path: 'libro',
  component: BibliotecaComponent,
  },
  {
    path: '',
    component: PagesComponent,

    children:[{
      path:'libro/crear' ,
      component: BibliotecaComponent
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
