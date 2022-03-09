import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calc';

firstValue:number = 0;
secondValue:number = 0;

summ():string{
  if(this.secondValue == null) return "второе число не корректно";
  else return `Сумма ${this.firstValue} + ${this.secondValue} = ${this.firstValue + this.secondValue}`
}

dif():string{
  if(this.secondValue == null) return "второе число не корректно";
   else return `Разность ${this.firstValue} - ${this.secondValue} = ${this.firstValue - this.secondValue}`
}

mult():string{
  if(this.secondValue == null) return "второе число не корректно";
  else return `Произведение ${this.firstValue} * ${this.secondValue} = ${this.firstValue * this.secondValue}`
  
}

divide():string{
  if(this.secondValue<=0|| this.secondValue == null) return "второе число не корректно";
  else return `Деление ${this.firstValue} / ${this.secondValue} = ${this.firstValue / this.secondValue}`
}


ourNumber: number = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
guessNumber:number=0
findNumber():any{
if (this.guessNumber > this.ourNumber) {
  return 'Введенное число больше'
} 
if (this.guessNumber < this.ourNumber) {
  return 'Введенное число меньше'
} 
if (this.guessNumber == this.ourNumber) {
  this.ourNumber= Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  return 'Угадали'
} 
}

}
