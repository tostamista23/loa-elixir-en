import { Council, data, GameState } from 'src/app/core/elixir';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-council-dialog',
  templateUrl: './council-dialog.component.html',
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
export class CouncilDialogComponent implements OnInit {
  councils = data.councils;
  dataSource: {
    description: any;
    council: Council;
  }[] = [];
  filteredDataSource: {
    description: any;
    council: Council;
  }[] = [];

  filterText: string = '';

  selected: Council | null = null;

  constructor(
    public dialogRef: MatDialogRef<CouncilDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public dialogData: { gameState: GameState; index: number },
    protected _sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.dataSource = data.councils.map((council) => ({
      council,
      description: this._sanitizer.bypassSecurityTrustHtml(GameState.query.getCouncilDescriptionFromId(
        this.dialogData.gameState,
        council.id,
        this.dialogData.index
      )),
    }));
    this.filteredDataSource = [...this.dataSource];
  }

  selectRow(council: Council) {
    this.selected = council;
  }

  filterData(str: string) {
    this.filterText = str;
    this.filteredDataSource = this.dataSource.filter((data) => {
      if (this.filterText === '') return true;
      return data.description?.changingThisBreaksApplicationSecurity?.toLocaleLowerCase().replace(/<[^>]*>/g, '').includes(str.toLocaleLowerCase());
    });
  }

  confirm() {
    if (this.selected) {
      this.dialogRef.close(this.selected.id);
    }
  }

  cancel() {
    this.dialogRef.close();
  }
}
