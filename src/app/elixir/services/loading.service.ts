// loading-dialog.service.ts
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoadingDialogComponent } from '../components/loading-dialog/loading-dialog.component';

@Injectable()
export class LoadingDialogService {
  dialogRef!: MatDialogRef<LoadingDialogComponent>;

  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    this.dialogRef = this.dialog.open(LoadingDialogComponent, {
      disableClose: true,
      panelClass: 'loading-dialog-overlay',
    });
  }

  closeDialog(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

  setText(text: string){
    if (this.dialogRef){
        this.dialogRef.componentInstance.loadingText = text;
    }
  }
}