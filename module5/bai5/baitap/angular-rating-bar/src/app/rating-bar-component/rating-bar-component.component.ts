import { IRatingUnit } from './../irating-unit';
import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output,
  OnChanges,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-rating-bar-component",
  templateUrl: "./rating-bar-component.component.html",
  styleUrls: ["./rating-bar-component.component.scss"],
})
export class RatingBarComponentComponent implements OnInit, OnChanges {
  @Input()
  max = 10;
  @Input()
  ratingValue = 5;
  @Input()
  showRatingValue = true;

  @Output()
  rateChange = new EventEmitter<number>();

  ratingUnits: Array<IRatingUnit> = [];

  constructor() {}

  ngOnInit(): void {
    this.calculate(this.max, this.ratingValue);
  }

  ngOnChanges(changes: SimpleChanges) {
    if ("max" in changes) {
      let max = changes.max.currentValue;
      max = typeof max === "undefined" ? 5 : max;
      this.max = max;
      this.calculate(max, this.ratingValue);
    }
  }

  calculate(max: any, ratingValue:number) {
    this.ratingUnits = Array.from({ length: max }, (_, index) => ({
      value: index + 1,
      active: index < ratingValue,
    }));
  }

  select(index) {
    this.ratingValue = index + 1;
    this.ratingUnits.forEach(
      (item, idx) => (item.active = idx < this.ratingValue)
    );
    this.rateChange.emit(this.ratingValue);
  }

  enter(index) {
    this.ratingUnits.forEach((item, idx) => (item.active = idx <= index));
  }

  reset() {
    this.ratingUnits.forEach(
      (item, idx) => (item.active = idx < this.ratingValue)
    );
  }
}
