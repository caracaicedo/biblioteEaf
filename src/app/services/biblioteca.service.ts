import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  url:string=environment.url_biblioteca;

  constructor(
    private http: HttpClient
  ) { }

  getCategoria(): Observable <any>{

    return this.http.get<any>(`${this.url }categoria/getAll`);
  }

  getAutor(): Observable <any>{

    return this.http.get<any>(`${this.url }autor/getAll`);
  }



}
