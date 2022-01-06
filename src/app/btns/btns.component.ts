import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-btns',
  templateUrl: './btns.component.html',
  styleUrls: ['./btns.component.css']
})
export class btnsComponent {
  @Output() sendValue = new EventEmitter()
  @Output() emitResult = new EventEmitter()
  @Output() sendSign = new EventEmitter()
  @Output() clear = new EventEmitter()
  @Output() cutting = new EventEmitter()
  @Output() absVal = new EventEmitter()

  constructor() { }

  numberEvent(val: string): void {
    this.sendValue.emit(val)
  }

  addSign(sign: string): void {
    this.sendSign.emit(sign)
  }

  pressEqual(sign: string): void {
    this.emitResult.emit(sign)
  }

  clearEvent(): void {
    this.clear.emit()
  }

  cut() {
    this.cutting.emit()
  }

  convertAbsVal(): void {
    this.absVal.emit()
  }

}
