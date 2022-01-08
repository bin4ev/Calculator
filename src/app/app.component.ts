
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  first: any = ''
  sec: any = ''
  operator: string = ''
  result: any
  display: any = 0
  expDisplay: string = ''

  getValue(val: string): void {
    if (this.operator) {
      this.sec += val
      this.display = this.sec
      return
    }

    this.first += val
    this.display = this.first
  }

  setOperator(operator: string): void {
    this.expDisplay = ''
    if (this.operator) {
      this.operator = operator
      this.calculate(operator)
      this.first = this.result
      this.sec = ''
      this.expDisplay = this.first + operator
      this.display = this.result
      return
    }

    if (this.first) {
      this.operator = operator
      this.expDisplay += this.first + operator
    }
  }

  showResult(operator: string): void {
    if (this.first && this.sec && this.operator) {
      this.expDisplay += this.sec + operator
      this.calculate(this.operator)
      this.first = this.result
      this.sec = ''
      this.operator = ''

    }
  }

  cutValue(): void {
    this.display = this.display?.substring(0, this.display.length - 1)
    this.setOperands(this.display)
  }

  getAbsValue(): void {
    this.display = this.display > 0 ? '-' + this.display : Math.abs(Number(this.display))
    this.setOperands(this.display)
  }

  clearAll(): void {
    this.first = ''
    this.sec = ''
    this.operator = ''
    this.result = 0
    this.expDisplay = ''
    this.display = 0
  }

  private setOperands(display: string): void {
    if (this.sec) {
      this.sec = display
      return
    }

    if (this.first) {
      this.first = display
    }
  }

  private calculate(operator: string): void {
    let first = Number(this.first)
    let sec = Number(this.sec)
    switch (operator) {
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
    this.display = this.result
  }

}
