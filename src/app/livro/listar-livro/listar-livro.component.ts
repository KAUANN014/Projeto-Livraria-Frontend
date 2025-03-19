import { ConfirmarExclusaoComponent } from '../ConfirmarExclusao/ConfirmarExclusao.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Livro, LivroService } from '../../service/livro.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-listar-livro',
  templateUrl: './listar-livro.component.html',
  styleUrls: ['./listar-livro.component.scss'],
   standalone: false
})
export class ListarLivroComponent {

  displayedColumns: string[] = ['id', 'nome', 'acoes'];
  dataSource = new MatTableDataSource<Livro>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private livroService: LivroService, private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.carregarLivros();
  }

  carregarLivros(): void {
    this.livroService.getLivros().subscribe({
      next: (livros) => {
        this.dataSource.data = livros;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => console.error('Erro ao buscar livros:', err)
    });
  }

  aplicarFiltro(event: Event): void {
    const valorFiltro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valorFiltro.trim().toLowerCase();
  }

  editarLivro(livroId: number) {
    this.router.navigate(['/livro/alterar', livroId]);
  }


  confirmarExclusao(livro: Livro) {
    const dialogRef = this.dialog.open(ConfirmarExclusaoComponent, {
      width: '300px',
      data: { livro }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.excluirLivro(livro);
      }
    });
  }

  excluirLivro(id: any) {
    this.livroService.excluirLivro(id!).subscribe({
      next:() =>{
        this.carregarLivros();
      },
      error:(err) =>console.error("erro ao excluir", err)
    })
  }

}


