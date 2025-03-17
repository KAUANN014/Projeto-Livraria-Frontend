import { AuthServiceService } from '../../service/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../../service/notification.service';

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
              private router: Router,
              private notificationService: NotificationService,) {
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
        this.notificationService.showSuccess('Login bem-sucedido!');
        console.log('Login bem-sucedido', token.message);
        localStorage.setItem('authToken', token.token);
        this.router.navigate(['livro']);
      },
      error: (error) => {
        this.notificationService.showError('Erro ao fazer login.');
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
