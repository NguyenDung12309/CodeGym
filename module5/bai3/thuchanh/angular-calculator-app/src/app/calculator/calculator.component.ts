import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  number1 : string;
  number2 : string;
  result : number;
  constructor() { }

  ngOnInit(): void {
  }

  setNumber1(number1 : string): void{
    this.number1 = number1
  }

   setNumber2(number2 : string) :void {
    this.number2 = number2
  }

  calculator(operator: string) : void {
    switch (operator) {
      case "+":
         this.result = parseInt(this.number1) + parseInt(this.number2);
        break;
      case "-":
        this.result = parseInt(this.number1) - parseInt(this.number2);
        break;
      case "*":
        this.result = parseInt(this.number1) * parseInt(this.number2);
        break;
      case ":":
        this.result = parseInt(this.number1) / parseInt(this.number2);
        break;
    }
  }
}
