import { Component, OnInit } from '@angular/core';
import { LivroService } from '../../service/livro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-livro',
  templateUrl: './listar-livro.component.html',
  styleUrls: ['./listar-livro.component.scss'],
   standalone: false
})
export class ListarLivroComponent implements OnInit {
  displayedColumns: string[] = ['livroId', 'nome'];


  livros: any[] = [];

  constructor(private livroService: LivroService, private router: Router) {}

  ngOnInit(): void {
    this.carregarLivros();
  }
  irParaCadastro() {
    this.router.navigate(['../cadastrar-livro']);
  };

  carregarLivros() {
    this.livroService.getLivros().subscribe(
      (dados) => {
        this.livros = dados;
        console.log("Dados recebidos:", dados);
      },
      (erro) => {
        console.error("Erro ao buscar livros:", erro);
      }
    );
  }

}
