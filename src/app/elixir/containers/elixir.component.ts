import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  api,
  Council,
  data,
  GameState,
  Sage,
  SageType,
} from 'src/app/core/elixir';
import { DisclaimerDialogComponent } from '../../core/components/disclaimer-dialog.component';
import { EvaluatorService } from '../services/evaluator.service';
import { SageService } from '../services/sage.service';
import { Box } from '../models/box.model';
import { MAX_CHAOS, MAX_LAWFUL } from 'src/app/core/elixir/data/const';
import { ScreenBox } from '../models/screen.model';
import { DetectionService } from '../services/detection.service';
import { GetAllCouncils } from '../functions/sage';
import { updateImage } from '../functions/resolution';
import { AnomalyDialogComponent } from '../components/anomaly-dialog.component';
import { LoadingDialogService } from '../services/loading.service';

@Component({
  selector: 'app-elixir',
  templateUrl: './elixir.component.html',
  styleUrls: ['./elixir-common.scss', './elixir.component.scss'],
})
export class ElixirComponent implements OnInit {
  isLoading = false;
  isDev: boolean = true;
  gameState = api.game.getInitialGameState({ maxEnchant: 10, totalTurn: 14 });

  //For detection
  gameScreen: ScreenBox = new ScreenBox();

  focusedIndices: [number, number] = [0, 1];

  curveScores: number[] = [];
  adviceScores: number[] = [];
  totalScores: number[] = [];
  baselineScore: number = 0;

  councils = data.councils;

  isDangerous = false;
  
  constructor(
    private dialog: MatDialog,
    private evaluator: EvaluatorService,
    public detection: DetectionService,
    public sageService: SageService,
    public loadingService: LoadingDialogService
  ) { }

  ngOnInit(): void {
    this.dialog.open(DisclaimerDialogComponent, {
      disableClose: true,
    });
    this.evaluator.fetchInitialData().then(() => {
      this.updateScores();
      this.isLoading = false;
    });
  }

  get pickRatios() {
    return GameState.query.getPickRatios(this.gameState);
  }

  get luckyRatios() {
    return GameState.query.getLuckyRatios(this.gameState);
  }

  get recommendRerollBaseline() {
    return this.adviceScores.every((score) => score < this.baselineScore);
  }

  get recommendRerollLawfulFullSeal() {
    if (!GameState.query.checkSealNeeded(this.gameState)) {
      return false;
    }

    const lawfulFullSage = this.gameState.sages.find((x) =>
      Sage.query.isLawfulFull(x)
    )!;

    if (lawfulFullSage && lawfulFullSage.councilId !== 'mYuyjIL/') {
      return true;
    }

    return false;
  }

  isMaxValue(value: number): boolean {
    return Math.max(...this.totalScores) === value;
  }

  get recommendRerollLawfulSeal() {
    if (!GameState.query.checkSealNeeded(this.gameState)) {
      return false;
    }

    const lawfulSage = this.gameState.sages.find((x) => x.type === 'lawful')!;
    if (!lawfulSage) {
      return false;
    }

    const power = lawfulSage.power;

    if (this.gameState.turnLeft > data.constant.MAX_LAWFUL - power) {
      const council = Council.query.getOne(lawfulSage.councilId);
      if (
        council.type === 'seal' &&
        council.logics[0].type === 'sealTarget' &&
        this.focusedIndices.includes(council.logics[0].targetCondition - 1)
      ) {
        return true;
      }
    }

    return false;
  }

  @HostListener('paste', ['$event'])
  onPaste(event: any): void {
    // Check if the event has already been handled
    if (this.isEventHandled(event)) {
      return;
    }

    for (const item of (event.clipboardData || event.originalEvent.clipboardData).items) {
      if (item.type.indexOf('image') !== -1) {
        this.reset();
  
        const blob = item.getAsFile();
        const reader = new FileReader();
  
        reader.onload = (e: any) => {
          
          this.insertImage(e.target.result);
        };
  
        reader.readAsDataURL(blob);
        this.loadDetection(blob);
      }
    }

    this.markEventHandled(event);
  }

  
  private isEventHandled(event: any): boolean {
    const handledKey = '__handled__';
    return event[handledKey] === true;
  }

  private markEventHandled(event: any): void {
    const handledKey = '__handled__';
    event[handledKey] = true;
  }

  onDragOver(event: any): void {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
    const div = document.querySelector('.image-container');
    div?.classList.add('drag-over');
  }

  onDrop(event: any): void {
    this.reset();

    event.preventDefault();
    const files = event.dataTransfer.files;

    if (files.length > 0) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.insertImage(e.target.result);
      };

      reader.readAsDataURL(files[0]);
      this.loadDetection(files[0]);
    }

    const div = document.querySelector('.image-container');
    div?.classList.remove('drag-over');
  }

  insertImage(dataURL: string): void {
    const img = document.createElement('img');
    img.src = dataURL;

    const div = document.querySelector('.image-container');
    if (div){
      div.innerHTML = '';
      img.classList.add('inserted-image');
      img.setAttribute("style", "height:" + (div.clientHeight - 100) + 'px')
      img.setAttribute("style", "width:100%")
      div.appendChild(img);
    }
  }

  removeImage(){
    const img = document.querySelector('.inserted-image');
    if (img) {
      img.remove();
    }

    const div = document.querySelector('.image-container');
    if (div){
      div.innerHTML = '<p>Press (CTRL + V) or Click or <br>drag and drop an image here</p>';
    }
  }

  getCouncilDescription(id: string, index: number) {
    return GameState.query.getCouncilDescriptionFromId(
      this.gameState,
      id,
      index
    );
  }

  updateScores() {
    const scores = this.evaluator.evaluateScores(
      this.gameState,
      this.focusedIndices
    );
    this.baselineScore = this.evaluator.evaluateBaselineAdviceScore(
      this.gameState,
      this.focusedIndices
    );

    this.curveScores = scores.curveScores;
    this.adviceScores = scores.adviceScores;
    this.totalScores = scores.totalScores;
  }

  async onFileSelected(event: any): Promise<void> {

    if (event.target.files.length == 0)
      return;

    this.reset();

    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.insertImage(e.target.result);
    };

    reader.readAsDataURL(event.target.files[0]);
    this.loadDetection(event.target.files[0]);
  }

  loadDetection(file: any){      
    this.loadingService.openDialog();
    this.loadingService.setText("Preparing...");

    updateImage(URL.createObjectURL(file), this.gameScreen.isForced).then((x: {success: boolean, file?: string, aspectratio?: number}) => {
      this.loadingService.setText("Reading image...");
      if (!x.success || !x.file){
        this.loadingService.closeDialog();
        alert("Image dimensions not supported")
        return;
      }

      this.loadingService.setText("Updating Aspect Ratio...");
      this.gameScreen.aspectRatio = x?.aspectratio?.toString() || ""

      if (!this.gameScreen.isForced && this.gameScreen.aspectRatio != "1.77778"){
        this.gameScreen.updateToAspectRatio219()
      }else if (!this.gameScreen.isForced && this.gameScreen.aspectRatio == "1.77778"){
        this.gameScreen.updateToAspectRatio169();
      }

      this.loadingService.setText("Initializing detection...");
      this.detection.start(this.gameScreen, x?.file).then(() => {
        this.loadingService.setText("Updating Effects...");
        this.updateEffects();
        this.loadingService.setText("Updating Sages...");
        this.updateSages();
        this.loadingService.setText("Remaining Steps...");
        this.updateRemainingSteps();
        this.loadingService.closeDialog();
      })

    })

  }

  updateSages(){
    const list: {id: string,sage: number, desc: string, canExhaust: boolean}[] = GetAllCouncils(this.gameState);
    this.gameScreen.sages.forEach((box:Box, index: number) => {

      const chaos = box.children?.filter(x => x.text == "chaos")
      const lawful = box.children?.filter(x => x.text == "lawful")

      this.setTypePower(index, { 
        type: chaos?.length != 0 ? 'chaos' : lawful?.length !=0 ? 'lawful' : 'none', 
        power: chaos?.length || lawful?.length || 0 
    });

      box.replacesSages();
      let result = list.filter((x) => x.desc.length > 8 && x.desc.toLocaleLowerCase() == box.text?.toLocaleLowerCase());

      if (result.length === 0){
        console.log(box.text);
        console.log(list.filter(x => x.id == "6CvFcBRK"));
        alert("Sage Option: " + box.text + " not found pls contact tostamista (discord)")
        return
      }else if (box.text && result.length !== 1 && result.length <= 10) {
        console.log(box.text);
        this.AnomalyDialog(index, result)
        return;
      }

      this.updateCouncil(index, result[0].id, result[0].canExhaust);
    });
  }

  updateEffects(){

    this.gameScreen.effects.forEach((box:Box, index: number) => {

      box.replacesEffect();

      let result = data.effectOptions.find((x) => x.name.toLocaleLowerCase() == box.text.toLocaleLowerCase());
    
      !result ? alert("Effect Option: " + box.text + " not found pls contact tostamista (discord)") : this.gameState.effects[index].optionName = result.name

      this.setEffectValue(index ,box.value)

      if (box.child.text && String(box.child.text).toLocaleLowerCase() == "seal"){
        this.setEffectSealed(index, true)
      }
    });
  }

  updateRemainingSteps() {
    const regex = new RegExp(`^\\d{1,2}`);

    this.gameScreen.replacesAttemptsLeft()
    
    const match = this.gameScreen.attemptsLeft.text.match(regex);

    if ((match ? match[0] : null) === null){
      alert("Remaining attemps invalid");
      return;
    }

    //sometimes t is converted to 1 -> Ex. 61
    if (match > 13 && match[0].length == 2 && match[0].charAt(1) == 1){
      match[0] = match[0].charAt(0)
    }

    const diff = this.gameState.turnLeft - (match.length == 1 ? match[0] : match[0] + match[1]);
    const incrementOrDecrement = diff < 0 ? this.increaseTurnLeft.bind(this) : this.decreaseTurnLeft.bind(this);

    Array(Math.abs(diff)).fill(1).forEach((_, index) => {
        setTimeout(() => {
            incrementOrDecrement();
        }, 150 * (index + 1));
    });
  }

  onFocusTarget(index: number) {
    if (this.focusedIndices.includes(index)) {
      return;
    }
    this.focusedIndices = [this.focusedIndices[1], index];
    this.updateScores();
  }

  resetStates() {
    this.gameState = api.game.getInitialGameState({
      maxEnchant: 10,
      totalTurn: 14,
    });
    this.updateScores();
  }

  increaseTurnLeft() {
    this.gameState = {
      ...this.gameState,
      turnLeft: Math.min(
        this.gameState.config.totalTurn,
        this.gameState.turnLeft + 1
      ),
    };
    this.isDangerous = false;
    this.updateScores();
  }

  decreaseTurnLeft() {
    this.gameState = {
      ...this.gameState,
      turnLeft: Math.max(0, this.gameState.turnLeft - 1),
    };
    this.isDangerous = false;
    this.updateScores();
  }

  increaseEffectValue(index: number) {
    this.gameState = GameState.increaseEffectValue(this.gameState, index, 1);
    this.updateScores();
  }

  decreaseEffectValue(index: number) {
    this.gameState = GameState.increaseEffectValue(this.gameState, index, -1);
    this.updateScores();
  }

  setEffectValue(index: number, value: number) {
    this.gameState = GameState.setEffectValue(this.gameState, index, value);
    this.updateScores();
  }

  setEffectSealed(index: number, isSealed: boolean) {
    if (isSealed) {
      this.gameState = GameState.sealEffect(this.gameState, index);
    } else {
      this.gameState = GameState.unsealEffect(this.gameState, index);
    }
    this.updateScores();
  }

  setSageExhausted(index: number, isExhausted: boolean) {
    if (isExhausted) {
      this.gameState = GameState.exhaustSage(this.gameState, index);
    } else {
      this.gameState = {
        ...this.gameState,
        sages: this.gameState.sages.map((sage, i) =>
          i === index
            ? {
                ...sage,
                isExhausted: false,
              }
            : sage
        ),
      };
    }
  }

  setCouncil(index: number, councilId: string) {
    this.gameState = {
      ...this.gameState,
      sages: this.gameState.sages.map((sage, i) =>
        i === index
          ? {
              ...sage,
              councilId,
            }
          : sage
      ),
    };
    this.isDangerous = true;
    this.updateScores();
  }

  setTypePower(
    index: number,
    { type, power }: { type: SageType; power: number }
  ) {
    this.gameState = {
      ...this.gameState,
      sages: this.gameState.sages.map((sage, i) =>
        i === index
          ? {
              ...sage,
              type,
              power,
            }
          : sage
      ),
    };
    this.updateScores();
  }

  AnomalyDialog(index: number, list: any[]) {
    const dialogRef = this.dialog.open(AnomalyDialogComponent, {
      disableClose: true,
      data: { gameState: this.gameState, list: list },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result == null) return;
      this.updateCouncil(index, result.id, result.canExhaust)
    });
  }

  updateCouncil(index: number, id: string, canExhaust?: boolean) {
    this.setCouncil(index, id)
    this.gameState.sages[index].isExhausted = canExhaust || false
  }

  reset() {
    this.resetStates();
    this.removeImage();
    const isF = this.gameScreen.isForced;
    this.gameScreen = new ScreenBox();
    this.gameScreen.isForced = isF
  }
}
