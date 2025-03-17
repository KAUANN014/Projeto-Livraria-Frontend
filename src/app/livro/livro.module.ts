import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivroComponent } from './livro.component';
import { CadastrarLivroComponent } from './cadastrar-livro/cadastrar-livro.component';
import { AlterarLivroComponent } from './alterar-livro/alterar-livro.component';
import { LivroRoutingModule } from './livro-routing.module';
import { ListarLivroComponent } from './listar-livro/listar-livro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmarExclusaoComponent } from './ConfirmarExclusao/ConfirmarExclusao.component';

import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule } from '@angular/material/icon';

import { LayoutModule } from '../layout/layout.module';
import { MatFormField,  MatLabel } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { CardsListComponent } from './cards-list/cards-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    LivroComponent,
    CadastrarLivroComponent,
    AlterarLivroComponent,
    ListarLivroComponent,
    DashboardComponent,
    CardsListComponent,
    ConfirmarExclusaoComponent
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
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatDialogModule
   
  ]
})
export class LivroModule { }
