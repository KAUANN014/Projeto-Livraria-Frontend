import { Livro } from './../../service/livro.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LivroService } from '../../service/livro.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alterar-livro',
  standalone: false,
  templateUrl: './alterar-livro.component.html',
  styleUrl: './alterar-livro.component.scss',
})
export class AlterarLivroComponent {
  livroId!: number;
  livroForm!: FormGroup;
  autores: any[] = [];
  mensagemSucesso: string | null = null;
  mensagemErro: string | null = null;

  constructor(
    private fb: FormBuilder,
    private livroService: LivroService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.livroForm = this.fb.group({
      nome: ['', Validators.required],
      autorId: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    // Captura o ID da URL
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.livroId = +id;
        this.carregarLivro(this.livroId);
      }
    });

    this.carregarAutores();
  }

  carregarLivro(id: number): void {
    this.livroService.getLivroPorId(id).subscribe({
      next: (livro) => {
        this.livroForm.patchValue(livro);
      },
      error: (err) => console.error('Erro ao buscar livro:', err),
    });
  }

  carregarAutores(): void {
    this.livroService.getAutores().subscribe({
      next: (res) => {
        this.autores = res;
      },
      error: (err) => console.error('Erro ao buscar autores:', err),
    });
  }

  atualizarLivro(): void {
    if (this.livroForm.valid) {
      const livroAtualizado: Livro = {
        livroId: this.livroId,
        ...this.livroForm.value,
      };

      this.livroService.alterarLivro(livroAtualizado).subscribe({
        next: () => {
          this.mensagemSucesso = "📚 Livro atualizado com sucesso!";
          this.mensagemErro = null;
          console.log('Livro atualizado com sucesso!');

          // Aguarda 2 segundos antes de redirecionar
          setTimeout(() => {
            this.router.navigate(['/livro/listar']);
          }, 2000);
        },
        error: (err) => {
          console.error('Erro ao atualizar livro:', err);
          this.mensagemErro = "❌ Erro ao atualizar livro. Tente novamente!";
          this.mensagemSucesso = null;
        },
      });
    }
  }
  rotas() {
    this.router.navigate(['listar/livro']);
  }
}
