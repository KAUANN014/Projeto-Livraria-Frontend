import { AuthServiceService } from '../../service/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthServiceService,
              private router: Router) {
    this.initializeForm();
  }

  initializeForm():void{
    this.loginForm = this.fb.group({
      login: ['', [Validators.required]],
      senha: ['', [Validators.required, Validators.minLength(6)]],

    })
  }

  logar() {
    this.authService.login(this.loginForm.value).subscribe({
      next: (token) => {
        console.log('Login bem-sucedido', token.message);
        localStorage.setItem('authToken', token.token);
        this.router.navigate(['livro']);
      },
      error: (error) => {
        console.error('Erro no login', error);
      }
    });
  }

  enviarDados(): void {
    if (this.loginForm.valid) {
      this.logar();
      console.log('Formulário enviado com sucesso!', this.loginForm.value);
    } else {
      console.log('Formulário inválido. Preencha os campos corretamente.');
      this.loginForm.markAllAsTouched();
    }
  }

}
