import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivroComponent } from './livro.component';
import { CadastrarLivroComponent } from './cadastrar-livro/cadastrar-livro.component';
import { AlterarLivroComponent } from './alterar-livro/alterar-livro.component';
import { LivroRoutingModule } from './livro-routing.module';
import { ListarLivroComponent } from './listar-livro/listar-livro.component';
import { ReactiveFormsModule } from '@angular/forms';


import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '../layout/layout.module';
import { MatFormField, MatFormFieldControl, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    LivroComponent,
    CadastrarLivroComponent,
    AlterarLivroComponent,
    ListarLivroComponent,

  ],
  imports: [
    CommonModule,
    LivroRoutingModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatFormField,
    MatLabel,
   ReactiveFormsModule,
    MatInputModule

  ]
})
export class LivroModule { }
