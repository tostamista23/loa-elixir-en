import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import {
  EffectOption,
  GameState,
  SageType,
} from 'src/app/core/elixir'
import { CouncilDialogComponent } from './council-dialog.component';

@Component({
  selector: 'app-elixir-sage',
  templateUrl: './elixir-sage.component.html',
  styleUrls: ['./elixir-sage-common.scss', './elixir-sage.component.scss'],
})
export class ElixirSageComponent {
  @Input() gameState!: GameState;
  @Input() curveScores!: number[];
  @Input() adviceScores!: number[];
  @Input() totalScores!: number[];
  @Input() index!: number;
  @Input() selectedEffectOptions!: EffectOption[];

  @Output() changeCouncil = new EventEmitter<string>();
  @Output() changeTypePower = new EventEmitter<{
    type: SageType;
    power: number;
  }>();
  @Output() setExhausted = new EventEmitter<boolean>();

  constructor(protected _sanitizer: DomSanitizer, private dialog: MatDialog) {}

  get sage() {
    return this.gameState.sages[this.index];
  }

  get description(): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(GameState.query.getCouncilDescription(this.gameState, this.index));
  }

  get curveScore() {
    return this.curveScores[this.index];
  }

  get adviceScore() {
    return this.adviceScores[this.index];
  }

  get totalScore() {
    return this.totalScores[this.index];
  }

  get isHighest() {
    return this.totalScore === Math.max(...this.totalScores);
  }

  launchCouncilDialog(index: number) {
    const dialogRef = this.dialog.open(CouncilDialogComponent, {
      disableClose: true,
      data: { gameState: this.gameState, index },
    });

    dialogRef.afterClosed().subscribe((councilId) => {
      if (councilId == null) return;
      this.changeCouncil.emit(councilId);
    });
  }

  setTypePower(type: SageType, power: number) {
    this.changeTypePower.emit({ type, power });
  }
}
