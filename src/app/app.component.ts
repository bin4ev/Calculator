import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  first: any = ''
  sec: any = ''
  sign: string = ''
  result: any = 0
  temp: string = ''
  pressedEqual: boolean = false

  constructor() { }

  getValue(val: string): void {
    if (this.sign) {
      this.sec += val
      this.temp += val
      return
    }
    if(this.pressedEqual){
      this.temp = ''
      this.pressedEqual = false
    }

    if (this.result >= 0) {
      this.result = ''
    }

    this.first += val
    this.temp += val
  }

  setSign(sign: string): void {
    if(this.sign) {
      this.temp += sign
      this.calculate(Number(this.first), Number(this.sec),sign)
      this.reset()
      this.first =this.result
      this.temp = this.first
    }

    if (this.first) {
      this.sign = sign
      this.temp += sign
    }
  }

  showResult(sigh: string): void {
    if (this.first && this.sec && this.sign) {
      this.temp += sigh
      this.calculate(Number(this.first), Number(this.sec), this.sign)
      this.pressedEqual = true
      this.reset()
    }

  }

  reset() {
    this.first = ''
    this.sec = ''
    this.sign = ''
  }

  clearAll(): void {
    this.reset()
    this.result = 0
    this.temp = ''
  }

  private calculate(first: number, sec: number, sign: string): void {
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
    console.log(this.result);

  }

}
