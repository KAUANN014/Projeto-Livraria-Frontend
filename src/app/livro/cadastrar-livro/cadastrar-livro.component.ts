import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Livro, LivroService,  } from '../../service/livro.service';


@Component({
  selector: 'app-cadastrar-livro',
  templateUrl: './cadastrar-livro.component.html',
  styleUrls: ['./cadastrar-livro.component.scss'],
  standalone: false
})
export class CadastrarLivroComponent implements OnInit {
  private fb = inject(FormBuilder);
  addressForm: FormGroup;
  autores: any[] = [];

  constructor(private livroService: LivroService) {
    this.addressForm = this.fb.group({
      autorId: [null, Validators.required],
      nome: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.carregarAutores();
  }

  carregarAutores() {
    this.livroService.getAutores().subscribe({
      next: (res) => {
        this.autores = res;
      },
      error: (err) => {
        console.error('Erro ao buscar autores:', err);
      }
    });
  }
  onSubmit() {
    this.salvarLivro();
  }
  salvarLivro() {
    console.log("Aqui", this.addressForm.value);
    if (this.addressForm.valid) {
      const novoLivro: Livro = this.addressForm.value;

      this.livroService.cadastrarLivro(novoLivro).subscribe({
        next: () => {
          console.log('Livro cadastrado com sucesso!');
          this.addressForm.reset();
        },
        error: (err) => {
          console.error('Erro ao cadastrar livro:', err);
          console.log('Erro ao cadastrar livro!');
        }
      });
    } else {
    }
  }
}
