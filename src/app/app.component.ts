import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { BibliotecaService } from './services/biblioteca.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'biblioteEaf';

  constructor(
    private bibliotecaService :BibliotecaService
  ){

  }
  ngOnInit(): void {
    // this.cargarPropiedades();
  }

  cargarPropiedades() {
   Swal.fire({
    text: 'Cargando Información',
    allowOutsideClick: false
  });
  Swal.showLoading(Swal.getDenyButton())
  this.bibliotecaService.getPropieades().subscribe(
    (resp: any) => {
      Swal.close();

      console.log('DDDDDDDDDD ')
;     localStorage.setItem("url_api_bliblioteca",resp.get[0].valor);



   },
    error => {
      console.log('EEEEEEEEEEEEEEEE ')

      Swal.close();
      // GeneralService.mostrarMensaje("Error consultando el servicio", "de categoria", "error");
    });
  }



}
