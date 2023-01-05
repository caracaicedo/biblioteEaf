import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ParametrosEAFResponse } from '../models/biblioteca/parametros.model';
import { Session } from '../models/biblioteca/sesion.model';
import { BibliotecaService } from '../services/biblioteca.service';

import { Constantes } from '../shared/Constantes';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html'
})
export class PagesComponent implements OnInit {

  constructor(private bibliotecaService:  BibliotecaService) { }

  ngOnInit(): void {
    // this.cargarPropiedades();
  }

  cargarPropiedades() {
    console.log('aaaaaaaaaaa')
   Swal.fire({
    text: 'Cargando Información',
    allowOutsideClick: false
  });
  Swal.showLoading(Swal.getDenyButton())
  this.bibliotecaService.getPropieades().subscribe(
    (resp: any) => {
      Swal.close();

      console.log('aaaaaaaaaaa '+resp.get[0].valor);
      localStorage.setItem("url_api_bliblioteca",resp.get[0].valor);



   },
    error => {
      Swal.close();
      // GeneralService.mostrarMensaje("Error consultando el servicio", "de categoria", "error");
    });
  }

}
