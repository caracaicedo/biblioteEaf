

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Constantes } from 'src/app/shared/Constantes';
// import { ValidacionesPropias } from 'src/app/shared/validacionesPersonalizadas';
import Swal from 'sweetalert2';
import { pipe } from 'rxjs';
import { Router} from '@angular/router';
import { categoria } from 'src/app/models/biblioteca/categoria.model';
import { BibliotecaService } from 'src/app/services/biblioteca.service';
import { autor } from 'src/app/models/biblioteca/autor.model';
import { productoResponse } from 'src/app/models/biblioteca/productoResponse.model';
import { propiedadesResponse } from 'src/app/models/biblioteca/propiedades.model';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html'
})
export class BibliotecaComponent implements OnInit {


  listaCategoria: categoria[] = [];
  listaAutor: autor[] = [];

  listaProducto: productoResponse[] = [];

  listaPropiedades: propiedadesResponse[] = [];

  cargaCompleta   : boolean = false;

  //paginacion
  tamanoPagina: number = Number(1);

  //FORMULARIO CONSULTA REGISTROS
  formaConsultaRegistros: FormGroup;

  //FORMULARIO BUSQUEDA
  formularioBusqueda : FormGroup;

  constructor(private router: Router,
    private fb: FormBuilder
    ,private bibliotecaService: BibliotecaService) { }

  ngOnInit() {
    this.construirForm();
    // this.ConsultarRoles();
    this.cargarPropiedades();
    this.ConsultarAutor();
    this.ConsultarCategoria();
    this.ConsultarProducto();
  }

  construirForm() {
    this.formaConsultaRegistros = this.fb.group({
      inputRegistros: ['', [Validators.required
       ]
      ]
    });
    this.setTamanoPagina(this.tamanoPagina);

    this.formularioBusqueda = this.fb.group({
      identificacionCliente: [''],
      nit: [''],
      tipoUsuario: [''],
      libro: [''],
    });
    this.setTamanoPagina(this.tamanoPagina);

  }

  count_validation_messages = {
    'inputRegistros': [
      { type: 'required', message: 'La cantidad de registros por pagina es obligatoria' },
      { type: 'soloNumeros', message: 'La cantidad de registros no debe contener caracteres alfanumericos' },
      { type: 'diferenteCero', message: 'La cantidad de registros a mostrar no puede ser cero' }
    ]
  }

  validarError(formulario: any, nombreCampo: string, tipoError: any) {
    return formulario.get(nombreCampo).hasError(tipoError)
      && (formulario.get(nombreCampo).dirty || formulario.get(nombreCampo).touched)
  }

  setTamanoPagina(cantidadRegistros: number) {
    this.formaConsultaRegistros.patchValue({
      inputRegistros: cantidadRegistros,
    });
  }
  cambiarCantRegistros() {
    if (this.formaConsultaRegistros.valid) {
      this.tamanoPagina = this.getCantidadRegistros();
      this.setTamanoPagina(this.tamanoPagina);
    }
  }
  getCantidadRegistros(): number {
    // return this.formaConsultaRegistros.get("inputRegistros").value;
    return 1;
  }
  get RegistrosNoValido() {
    // return this.formaConsultaRegistros.get('inputRegistros').invalid && this.formaConsultaRegistros.get('inputRegistros').touched;
    return true;
  }

  get factorNoValido() {
    return false;
  }
  get fechaInicioNoValido() {
    return false;
  }

  ConsultarCategoria() {
    Swal.fire({
      text: 'Cargando Información',
      allowOutsideClick: false
    });
    Swal.showLoading(Swal.getDenyButton())
    this.bibliotecaService.getCategoria().subscribe(
      (resp: any) => {
        Swal.close();
        this.listaCategoria = resp;

     },
      error => {
        Swal.close();
        // GeneralService.mostrarMensaje("Error consultando el servicio", "de categoria", "error");
      });

  }


  ConsultarAutor() {
    Swal.fire({
      text: 'Cargando Información',
      allowOutsideClick: false
    });
    Swal.showLoading(Swal.getDenyButton())
    this.bibliotecaService.getAutor().subscribe(
      (resp: any) => {
        Swal.close();


        this.listaAutor = resp;


     },
      error => {
        Swal.close();
        // GeneralService.mostrarMensaje("Error consultando el servicio", "de categoria", "error");
      });

  }

  cargarPropiedades() {
    Swal.fire({
     text: 'Cargando Información',
     allowOutsideClick: false
   });
   Swal.showLoading(Swal.getDenyButton())
   this.bibliotecaService.getPropieades().subscribe(
     (resp: propiedadesResponse[]) => {
       Swal.close();
       this.listaPropiedades=resp;
  localStorage.setItem("url_api_bliblioteca",this.listaPropiedades[0].valor);



    },
     error => {
       console.log('EEEEEEEEEEEEEEEE ')

       Swal.close();
       // GeneralService.mostrarMensaje("Error consultando el servicio", "de categoria", "error");
     });
   }


  ConsultarProducto() {
    // Swal.fire({
    //   text: 'Cargando Información',
    //   allowOutsideClick: false
    // });
    // Swal.showLoading(Swal.getDenyButton())
    // this.bibliotecaService.getAutor().subscribe(
    //   (resp: any) => {
    //     Swal.close();


    //     this.listaProducto = resp;


    //  },
    //   error => {
    //     Swal.close();
    //     // GeneralService.mostrarMensaje("Error consultando el servicio", "de categoria", "error");
    //   });
    this.listaProducto[0].CANTIDAD_ejemplares=1;
    this.listaProducto[0].FECHA_LLEGADA_BIBLIOTECA='01/07/2022';
    this.listaProducto[0].FECHA_inactivacion='01/07/2022';
    this.listaProducto[0].autores='Rafel P';
    this.listaProducto[0].cantidad_ejemplares_disponibles=100;
    this.listaProducto[0].nombre_categoria="Literatura";
    this.listaProducto[0].id_producto=1;
    this.listaProducto[0].titulo='El hoy es hoy';
    this.listaProducto[0].max_PERIODO_prestamo='30/04/2023';
    this.listaProducto[0].tipo='romance';

  }



  limpiar() {
    this.construirForm();
  }
  exportarFile(tipoArchivo:string) {
    // Swal.fire({
    //   text: 'Cargando Información',
    //   allowOutsideClick: false
    // });
    // Swal.showLoading();
    // var currentdate = new Date();
    // var datetime = currentdate.getDay()+1 + "/"+currentdate.getMonth() + "/" + currentdate.getFullYear();
    // switch(tipoArchivo){
    //   case "xlsx":
    //   GeneralService.exportAsExcelFile(this.listaCategoria,"Usuarios","Usuarios"+datetime);
    //   break;
    //   case "csv":
    //   GeneralService.exportAsCsvFile(this.listaCategoria,"Usuarios"+datetime+".csv");
    //   break;
    // }

   }


  buscar(value: any) {

    // Swal.fire({
    //   text: 'Cargando Información',
    //   allowOutsideClick: false
    // });
    // Swal.showLoading();

    // this.listaCategoria = [];
    // var identificacionCliente = value.identificacionCliente != '' ? false : true;
    // var tipoUsuario = value.tipoUsuario != '' ? false : true;
    // var numeroDocument = value.numeroDocument != '' ? false : true;
    // var nit = value.nit != '' ? false : true;

    //   let i = 0;
    //   this.listaReporteFiltrar.forEach(usuario => {
    //     if ((identificacionCliente||value.identificacionCliente == usuario.nitEmpresa)
    //     && (tipoUsuario || value.tipoUsuario == usuario.idRol)
    //     && (nit || value.nit == usuario.nitEmpresa)
    //     && (numeroDocument||value.numeroDocument == usuario.cedula)) {
    //       this.listaCategoria[i] = usuario;
    //       i++;
    //     }

    //   })
    //   Swal.close();
    //   return

  }

  ConsultarRoles() {
    // Swal.fire({
    //   text: 'Cargando Información',
    //   allowOutsideClick: false
    // });
    // Swal.showLoading();
    // this.apiBiometriaVozService.ConsultarRoles().subscribe(
    //   (resp: rolesResponse) => {
    //     Swal.close();
    //     this.listaRoles = resp.data.roles;
    //   },
    //   error => {
    //     Swal.close();
    //     GeneralService.mostrarMensaje("Error consultando el servicio", "de consultar roles", "error");

    //   });
  }

  consultarClientes() {
    // Swal.fire({
    //   text: 'Cargando Información',
    //   allowOutsideClick: false
    // });
    // Swal.showLoading();
    // this.apiBiometriaVozService.ConsultarClientes().subscribe(
    //   (resp: ClienteResponse) => {
    //     Swal.close();
    //     this.listaCliente = resp.data.empresas;
    //   },
    //   error => {
    //     Swal.close();
    //     GeneralService.mostrarMensaje("Error consultando el servicio", "de consultar cliente", "error");

    //   });
  }

  // editarUsuario(usuario: UsuarioTablaDto) {
  //   this.router.navigate([`/biometriaVoz/administrador/parametrizacion/usuarios/${usuario.cedula}`]);
  // }

}

