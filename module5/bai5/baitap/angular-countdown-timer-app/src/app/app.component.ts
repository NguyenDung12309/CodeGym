import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  test = 11;
  title = 'angular-countdown-timer-app';
  message : string;
  finishMessage(message:string){
    this.message = message;
  }
}
