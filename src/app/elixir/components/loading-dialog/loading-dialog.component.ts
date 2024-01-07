import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-loading-dialog',
  template: `
  <div class="loading-container">
    <mat-spinner diameter="75"></mat-spinner>
    <p>{{loadingText}}</p>
  </div>
  `,
  styles: [
    `
    .loading-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

      mat-spinner {
        margin-right: 8px;
      }

      p {
        display: inline-block;
      }
    `,
  ],
})
export class LoadingDialogComponent {
    public loadingText = "Getting ready..."
    constructor(@Inject(MAT_DIALOG_DATA) public data: { loadingText: string }) {}

}