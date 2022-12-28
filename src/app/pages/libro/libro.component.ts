import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BibliotecaService } from 'src/app/service/biblioteca.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent {
  constructor(private fb: FormBuilder,
    private bibliotecaService: BibliotecaService) { }

    //FORMULARIO CONSULTA REGISTROS
    formularioBusqueda: FormGroup;




  categoria: any[] = [
    {value: '1', viewValue: 'romance'},
    {value: '2', viewValue: 'comedia'},
  ];

  ngOnInit() {
    this.construirForm();
   this.consultarCategorias();
  }

  construirForm() {
    this.formularioBusqueda = this.fb.group({
      categoria: ['',    ],

      estado: ['', ]
    });
  }

  consultarCategorias(){
    this.bibliotecaService.getCategoria().subscribe(resp=>{
      console.log(resp);
    })
  }

}


