import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoriaResponse } from '../models/categoria.model';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html'
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}