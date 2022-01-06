
import { Component,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data: any = {
    first: '',
    sec: ''
  }
  sign: string = ''
  result: any = 0
  expDisplay: string = ''
  stateVisual: string = 'result'

  getValue(val: string): void {
    if (this.stateVisual == 'result') {
      this.expDisplay = ''
    }

    if (this.sign) {
      this.stateVisual = 'sec'
      this.data.sec += val
      return
    }

    this.stateVisual = 'first'
    this.data.first += val
  }

  setSign(sign: string): void {
    if (this.sign) {
      this.expDisplay = this.result + sign
      this.calculate(sign)
      this.data.first = this.result
      this.data.sec = ''
      this.stateVisual = 'first'
      this.expDisplay = this.data.first + sign
      return
    }

    if (this.data.first) {
      this.sign = sign
      this.expDisplay += this.data.first + sign
    }
  }

  showResult(sign: string): void {
    if (this.data.first && this.data.sec && this.sign) {
      this.expDisplay += this.data.sec + sign
      this.calculate(this.sign)
      this.data.first = this.result
      this.reset()
    }
  }

  cutValue(): void {
    let val = this.data[this.stateVisual]
    this.data[this.stateVisual] = val.slice(0, val.length - 1)
    this.expDisplay = this.expDisplay.slice(0, this.data[this.stateVisual].length)
    if (this.expDisplay.length != 0) {
      this.expDisplay += this.sign
    }
  }

  getAbsValue(): void {
    let val = this.data[this.stateVisual]
    this.data[this.stateVisual] = val > 0 ? '-' + val : Math.abs(Number(val))
  }

  reset() {
    this.data.first = ''
    this.data.sec = ''
    this.sign = ''
  }

  clearAll(): void {
    this.reset()
    this.result = 0
    this.expDisplay = ''
    this.stateVisual = 'result'
  }

  private calculate(sign: string): void {
    let first = Number(this.data.first)
    let sec = Number(this.data.sec)
    switch (sign) {
      case '+':
        this.result = first + sec
        break;
      case '-':
        this.result = first - sec
        break;
      case 'x':
        this.result = first * sec
        break;
      case '÷':
        this.result = first / sec
        break;
      default:
        break;
    }

    this.stateVisual = 'result'
  }

}
