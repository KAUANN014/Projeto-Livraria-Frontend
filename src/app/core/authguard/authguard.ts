import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const authToken = localStorage.getItem('authToken'); // Verifica se o token está salvo

    if (authToken) {
      return true; // Usuário autenticado pode acessar
    }

    // Redireciona para a página de login se não estiver autenticado
    this.router.navigate(['/login']);
    return false;
  }
}
