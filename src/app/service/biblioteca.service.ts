import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  url='';

  constructor(
    private http: HttpClient
  ) { }

  getCategoria(){

  }
}
