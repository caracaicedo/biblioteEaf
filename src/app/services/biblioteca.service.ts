import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
// import { StorageService } from './storage.service';
import { Constantes } from '../shared/Constantes';
@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  url= localStorage.getItem("url_api_bliblioteca")?.toString();
  url_local =environment.url_biblioteca;


  constructor( private http: HttpClient) { }

cargarInformacionBasica() {
// this.url = this.storageService.getValuePropiedad(Constantes.PROP_ENDPOINT_BIOMETRIA_VOZ);
}

  getCategoria(): Observable <any>{

    return this.http.get<any>(`${this.url }categoria/getAll`);
  }

  getAutor(): Observable <any>{

    return this.http.get<any>(`${this.url }autor/getAll`);
  }


  getPropieades(): Observable <any>{

    return this.http.post<any>(`${this.url_local }propiedades/admParametroEAF?accion=C&codapp=APP_OPENSHIFT`,null);
  }


}
