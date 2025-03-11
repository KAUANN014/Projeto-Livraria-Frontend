import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarLivroComponent } from './listar-livro/listar-livro.component';
import { CadastrarLivroComponent } from './cadastrar-livro/cadastrar-livro.component';
import { AlterarLivroComponent } from './alterar-livro/alterar-livro.component';


const routes: Routes = [
  { path: '', redirectTo: 'listar-livro', pathMatch: 'full' },
  { path: 'listar-livro', component: ListarLivroComponent },
  { path: 'cadastrar-livro', component: CadastrarLivroComponent },
  { path: 'alterar-livro', component: AlterarLivroComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes),

  ],
  exports: [RouterModule]
})
export class LivroRoutingModule { }
