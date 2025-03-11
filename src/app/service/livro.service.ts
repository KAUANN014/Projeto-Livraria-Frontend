import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private livroUrl = 'http://localhost:5293/api/Livro'
  constructor(private http: HttpClient) { }

  getLivros(): Observable<any[]> {
    return this.http.get<any[]>(this.livroUrl);
  }
}
