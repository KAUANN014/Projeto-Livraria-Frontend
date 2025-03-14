import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarLivroComponent } from './listar-livro/listar-livro.component';
import { CadastrarLivroComponent } from './cadastrar-livro/cadastrar-livro.component';
import { AlterarLivroComponent } from './alterar-livro/alterar-livro.component';
import { LivroComponent } from './livro.component';

const routes: Routes = [
  {
    path: '',
    component: LivroComponent, // O livro.component.html conterá o navbar e o router-outlet
    children: [
      { path: '', redirectTo: 'listar', pathMatch: 'full' }, // Redireciona para listar automaticamente
      { path: 'listar', component: ListarLivroComponent },
      { path: 'cadastrar', component: CadastrarLivroComponent },
      { path: 'alterar', component: AlterarLivroComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),

  ],
  exports: [RouterModule]
})
export class LivroRoutingModule { }
