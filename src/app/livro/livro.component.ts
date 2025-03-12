import { Component } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-livro',
  standalone: false,
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.scss'
})
export class LivroComponent {

  constructor() {
    console.log("Passou aqui");
  }

}
