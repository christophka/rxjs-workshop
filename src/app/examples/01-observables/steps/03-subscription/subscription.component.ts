import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import {
  ConsoleService,
  logObserver,
} from 'src/app/ui/console/components/console/console.service';

@Component({
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
})
export class SubscriptionStepComponent implements OnInit {
  private readonly logger = this.consoleService.scopedLogger('03-sub');
  private readonly period = 1000;
  private subscription?: Subscription;

  constructor(private consoleService: ConsoleService) {}

  ngOnInit(): void {
    // This creates an Observable that emits an increasing value
    // after the specified period and won't stop on its own.
    const interval$ = interval(this.period);

    // But we can use the result from the subscribe method
    // to store the subscription. With that we can
    // unsubscribe from further updates which will stop
    // the Observable.
    this.subscription = interval$.subscribe(logObserver(this.logger));

    // Calling this will unsubscribe after 5 emissions.
    // this.stopAfter(5);
    // The code implementing this is just to demonstrate subscription(s).
    // If you wanted to end emission after 5 values there would be
    // easier and more descriptive ways, which we can hopefully cover
    // in the examples about operators.
  }

  ngOnDestroy() {
    // This line will handle unsubscribing from the Observable.
    // It is crucial to understand when such a clean up is needed
    // because otherwise there might be potential memory leaks and
    // unwanted side effects.
    this.subscription?.unsubscribe();

    // But since this is a safe environment, you can comment this
    // and navigate to this page in the app and navigate away again.
    // You should see that even though this component is no longer
    // available in the view, the Observable will continue to
    // generate values.
  }

  private stopAfter(count: number) {
    // First we create an Observable that emits after the
    // given amount of time.
    const timer$ = timer(this.period * count);

    // ...and subscribe to it.
    const timerSubscription = timer$.subscribe(() => {
      // When a value is submitted, we are unsubscribing
      this.logger.warn('unsubscribing');
      this.subscription?.unsubscribe();
    });

    // Finally, we add this subscription to the existing
    // one. That we, both of them are cleaned up, because
    // otherwise the timer would continue emitting values.
    this.subscription?.add(timerSubscription);
  }
}
