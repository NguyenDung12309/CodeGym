import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-countdown-timer",
  templateUrl: "./countdown-timer.component.html",
  styleUrls: ["./countdown-timer.component.scss"],
})
export class CountdownTimerComponent implements OnInit, OnChanges, OnDestroy {
  message = "";
  remainingTime: number;
  @Input()
  seconds : number;
  @Output()
  finish = new EventEmitter<string>();
  private intervalId = 0;
  constructor() {}

  //xử lý xử liệu
  ngOnChanges(changes: SimpleChanges) {
    if ("seconds" in changes) {
      let v = changes.seconds.currentValue;
      v = typeof v === "undefined" ? 11 : v;
      const vFixed = Number(v);
      this.seconds = Number.isNaN(vFixed) ? 11 : vFixed;
    }
  }

  ngOnInit(): void {
    this.reset();
  }

  ngOnDestroy() {
    this.clearTimer();
  }

  clearTimer() {
    clearInterval(this.intervalId);
  }

  private countDown() {
    this.intervalId = window.setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        this.message = "Blast off!";
        this.clearTimer();
        this.finish.emit(this.message);
      } else {
        this.message = `T-${this.remainingTime} seconds and counting`;
      }
    }, 1000);
  }

  start() {
    this.countDown();
    if (this.remainingTime <= 0) {
      this.remainingTime = this.seconds;
    }
  }

  stop() {
    this.clearTimer();
    this.message = `Holding at T-${this.remainingTime} seconds`;
    this.finish.emit(this.message);
  }

  reset() {
    this.clearTimer();
    this.remainingTime = this.seconds;
    this.message = `Click start button to start the Countdown`;
    this.finish.emit(this.message);
  }
}
