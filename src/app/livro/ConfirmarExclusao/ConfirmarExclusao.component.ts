import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog'

@Component({
  selector: 'app-confirmar-exclusao',
  templateUrl: './ConfirmarExclusao.component.html',
  styleUrls: ['./ConfimarExclusao.component.css'],
  standalone: false
})
export class ConfirmarExclusaoComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmarExclusaoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  cancelar(): void {
    this.dialogRef.close(false);
  }

  confirmar(): void {
    this.dialogRef.close(true);
  }
}
