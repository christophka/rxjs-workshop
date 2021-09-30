import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { defer, interval, Subject } from 'rxjs';
import { scan, startWith, switchMapTo, takeWhile } from 'rxjs/operators';

/**
 * Creates an Observable that emits ever-decreasing numbers every second
 * starting from {seconds}
 *
 * @param seconds The countdown from which to start in seconds
 */
function countdown$(seconds: number) {
  // Using the creation operator `interval`, we are creating an `Observable`
  // that emits every second
  return interval(1000).pipe(
    // The `scan` operator works like a `reduce` for arrays, allowing to
    // accumulate `Observable` emissions.
    scan((acc, _) => --acc, seconds),
    // By using `startWith` we let the resulting `Observable` emit the
    // countdown starting number right away.
    startWith(seconds)
  );
}

@Component({
  templateUrl: './countdown-step.component.html',
  styleUrls: ['./countdown-step.component.scss'],
})
export class CountdownStepComponent {
  /** Form control that holds the countdown time */
  public countdownCtrl = new FormControl(10);

  /** Subject that emits when the start countdown button was clicked */
  private startClicked$ = new Subject<void>();

  /**
   * Observable that starts a countdown every time the start button was clicked
   * and that completes, when `0` is reached.
   */
  public readonly countdown$ = this.startClicked$.pipe(
    // Use `switchMapTo` to "reset" the countdown whenever start was clicked.
    switchMapTo(
      // We are using `defer` here to start the countdown
      // with the current value from the input
      defer(() => countdown$(this.countdownCtrl.value as number))
    ),
    // With the `takeWhile` operator we can control to complete the `Observable`
    // once the emitted value dropped below `0`
    takeWhile((val) => val >= 0)
  );

  onStart() {
    this.startClicked$.next();
  }
}
