import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LivroService, Livro } from '../../service/livro.service';

@Component({
  selector: 'app-cadastrar-livro',
  templateUrl: './cadastrar-livro.component.html',
  styleUrls: ['./cadastrar-livro.component.scss'],
  standalone:false
})
export class CadastrarLivroComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Output() closeModal = new EventEmitter<void>();

  livroForm: FormGroup;

  constructor(private fb: FormBuilder, private livroService: LivroService) {
    this.livroForm = this.fb.group({
       nome: ['', Validators.required],
      autorId: ['', Validators.required]
    });
  }
  ngOnInit():void{
    this.initForm();
  }

  private initForm(): void {
    this.livroForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      autorId: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.livroForm.valid) {
      const novoLivro: Livro = {
        nome: this.livroForm.value.nome,
        autorId: this.livroForm.value.autorId
      };

      this.livroService.cadastrarLivro(novoLivro).subscribe({
        next: (res) => {
          console.log('Livro cadastrado com sucesso', res);
          this.livroForm.reset();
          this.closeModal.emit();
        },
        error: (err) => {
          console.error('Erro ao cadastrar o livro:', err);
        }
      });
    }
  }
  fecharModal() {
    console.log('Fechar modal acionado');
    this.closeModal.emit();
  }
}
