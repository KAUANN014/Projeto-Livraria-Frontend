import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Livro, LivroService,  } from '../../service/livro.service';
import { Router } from '@angular/router';

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
  carregando = false

  constructor(private livroService: LivroService, private router: Router) {
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
  sucess(){
    this.router.navigate(['/livro/listar']);

  }

  salvarLivro() {
    if (this.addressForm.valid) {
      const novoLivro: Livro = this.addressForm.value;

      this.livroService.cadastrarLivro(novoLivro).subscribe({
        next: () => {
          this.sucess();
          console.log('Livro cadastrado com sucesso!');
          this.addressForm.reset();
          this.carregando = false;
        },
        error: (err) => {
          console.error('Erro ao cadastrar livro:', err);
          this.carregando = false; 
        }
      });
    } else {
    }
  }
}
