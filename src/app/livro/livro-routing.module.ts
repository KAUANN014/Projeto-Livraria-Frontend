import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarLivroComponent } from './listar-livro/listar-livro.component';
import { CadastrarLivroComponent } from './cadastrar-livro/cadastrar-livro.component';
import { AlterarLivroComponent } from './alterar-livro/alterar-livro.component';
import { LivroComponent } from './livro.component';

const routes: Routes = [
  {
    path: '',
    component: LivroComponent,
    children: [
      { path: '', redirectTo: 'listar', pathMatch: 'full' },
      { path: 'listar', component: ListarLivroComponent },
      { path: 'cadastrar', component: CadastrarLivroComponent },
      //mandar o id aqui
      { path: 'alterar/:id', component: AlterarLivroComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),

  ],
  exports: [RouterModule]
})
export class LivroRoutingModule { }
