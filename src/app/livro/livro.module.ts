import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivroComponent } from './livro.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LivroComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: LivroComponent}
    ])
  ],
  exports:[LivroComponent]
})
export class LivroModule { }
