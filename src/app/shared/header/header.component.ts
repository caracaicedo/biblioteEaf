// import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
// import { CookieService } from 'ngx-cookie-service';
// import { Constantes } from 'src/app/shared/Constantes';
// import { StorageService } from 'src/app/services/storage.service';
// import { ActivatedRoute, Router } from '@angular/router';
// import { GeneralService } from '../../services/api-ser-general.service';
// import { sitioDTO, sitiosResponse, PantallasXSitio, AdmSitiosEAFRequest, AdmSitiosEAFResponse } from 'src/app/models/admPerfiles/sitios.model';
// import { AdmPantallasEAFResponse } from 'src/app/models/admPerfiles/admPantallasModel.model';
// import { AdmPerfilesService } from 'src/app/services/api-adm-perfiles.service';
// import Swal from 'sweetalert2';
// import { consultaPantallasXUsuarioEAFResponse, consultaPantallasXUsuarioRequest, pantallaDTO } from 'src/app/models/admPerfiles/consultaPantallasXUsuario.model';
// import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html'
// })
// export class HeaderComponent implements OnInit {

//   TyC: string;
//   @ViewChild('TextoModalAyuda') div: ElementRef;

//   private requestConsultaPantallas: consultaPantallasXUsuarioRequest = new consultaPantallasXUsuarioRequest();

//   public admin = this.cookieService.get(Constantes.CONST_TIPO_USUARIO)==Constantes.CONST_ADMIN?true:false;
//   public nombreUsuario = this.cookieService.get(Constantes.CONST_NOMBRE_USUARIO_LOGUEADO);

//   constructor(private cookieService: CookieService
//     , private storageService: StorageService
//     , private generalService: GeneralService
//     , private admPerfilesService: AdmPerfilesService
//     , private router: Router
//     , private activatedRoute: ActivatedRoute
//     , private renderer: Renderer2) {

//   }

//   ngOnInit(): void {

//   }


//   irAHome() {
//     this.router.navigate(['/home']);
//     return;
//   }





//   isAuthenticated() {
//     return this.storageService.isAuthenticated();
//   }

//   getNombreUsuarioLogueado() {
//     return this.cookieService.get(Constantes.USUARIO);
//   }
//   cerrarSesion() {
//     this.cookieService.deleteAll();
//     this.storageService.logout();
//     this.router.navigate(['/login']).then(() => {
//       window.location.reload();
//     });
//   }

//   cargarTextoAyuda() {
//     this.TyC = this.storageService.getValuePropiedad(Constantes.PROP_TEXTO_MODAL_AYUDA);
//     const p: HTMLParagraphElement = this.renderer.createElement('div');
//     p.innerHTML = this.TyC;
//     this.renderer.appendChild(this.div.nativeElement, p);
//   }

// }
