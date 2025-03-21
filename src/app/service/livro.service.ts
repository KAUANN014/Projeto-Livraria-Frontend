import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Autor } from '../core/models/Autor.model';

export interface Livro {
  livroId?: number;
  nome: string;
  autorId: number;
}

@Injectable({
  providedIn: 'root',
})
export class LivroService {
  private apiUrl = 'http://localhost:5293/api/Livro';

  constructor(private http: HttpClient) {}

  cadastrarLivro(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>(this.apiUrl, livro);
  }

  getLivros(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.apiUrl);
  }

  alterarLivro(livro: Livro): Observable<Livro> {
    return this.http.put<Livro>(`${this.apiUrl}/${livro.livroId}`, livro);
  }

  getAutores(): Observable<Autor[]> {
    return this.http.get<Autor[]>('http://localhost:5293/api/Autor');
  }
  excluirLivro(livroId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${livroId}`);
  }

  getLivroPorId(id: number): Observable<Livro> {
    return this.http.get<Livro>(`${this.apiUrl}/${id}`);
  }

}
