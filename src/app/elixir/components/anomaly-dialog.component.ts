import { Council, data, GameState } from 'src/app/core/elixir';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-anomaly-dialog',
  templateUrl: './anomaly-dialog.component.html',
  styles: [
    `
      .table {
        width: 60vh;
        height: 60vh;
        overflow: scroll;
      }

      .row {
        border-bottom: 1px solid #ccc;
        padding: 12px 8px;
        cursor: pointer;
      }

      .row.selected {
        background-color: #eee;
      }
    `,
  ],
})
export class AnomalyDialogComponent implements OnInit {
  dataSource: any[] = [];
  selected: {id: string, canExhaust: boolean} | undefined;

  constructor(
    public dialogRef: MatDialogRef<AnomalyDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public dialogData: { gameState: GameState; list: any[] },
    protected _sanitizer: DomSanitizer
  ) { this.dataSource = this.dialogData.list; }

  ngOnInit(): void {
  }

  selectRow(e: any) {
    this.selected = e;
  }

  confirm() {
    if (this.selected) {
      this.dialogRef.close(this.selected);
    }
  }

  cancel() {
    this.dialogRef.close();
  }
}
