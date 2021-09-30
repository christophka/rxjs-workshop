import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {
  ConsoleService,
  logObserver,
} from 'src/app/ui/console/components/console/console.service';

@Component({
  templateUrl: './async-observables.component.html',
  styleUrls: ['./async-observables.component.scss'],
})
export class ObservableStepAsyncComponent implements OnInit, OnDestroy {
  public readonly file = `/examples/01-observables/steps/04-async/async-observables.component.ts`;
  private readonly logger = this.consoleService.scopedLogger('04-async');

  private readonly period = 1000;

  // TODO: Get rid of intervalHandle as a member of this class
  private intervalHandle?: any;
  // HINT: You will need this subscription
  private subscription?: Subscription;

  // Since Observables don't do anything until subscribed
  // it's totally OK to instantiate one right here.
  private readonly interval$ = new Observable((subscriber) => {
    // TODO: Implement
  });

  constructor(private consoleService: ConsoleService) {}

  ngOnInit(): void {
    this.logger.info(`start producing values`);

    let i = 0;
    this.intervalHandle = setInterval(() => {
      this.logger.log(`next ${i++}`);
    }, this.period);
  }

  ngOnDestroy() {
    if (this.intervalHandle) {
      clearInterval(this.intervalHandle);
      this.intervalHandle = undefined;
      this.logger.info(`interval cleared`);
    }
  }
}
