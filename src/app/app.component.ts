import { Component } from '@angular/core';
import { BibliotecaService } from './service/biblioteca.service';

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
}
