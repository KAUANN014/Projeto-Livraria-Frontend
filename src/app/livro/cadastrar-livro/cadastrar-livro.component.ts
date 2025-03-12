import { Component, EventEmitter, Input, Output,  } from '@angular/core';

@Component({
  selector: 'app-cadastrar-livro',
  standalone: false,
  templateUrl: './cadastrar-livro.component.html',
  styleUrl: './cadastrar-livro.component.scss'
})
export class CadastrarLivroComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }

}
