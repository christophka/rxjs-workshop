import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsoleService } from 'src/app/ui/console/components/console/console.service';

@Component({
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss'],
})
export class ObservableStepBasicsComponent implements OnInit {
  public readonly file = `/examples/01-observables/steps/01-basics/observables.component.ts`;

  private readonly logger = this.consoleService.scopedLogger('01-basics');

  private start = 0;
  private count = 10;

  constructor(private consoleService: ConsoleService) {}

  ngOnInit(): void {
    // TODO: Change the next 2 lines to try your solution
    this.withoutRxjs();
    // this.withRxjs();
  }

  withoutRxjs() {
    // Of course, as you know, this will invoke the function `getNumbers`.
    // If the function wouldn't be invoked, it wouldn't do anything
    // else than just being here.
    this.getNumbers(this.start, this.count);
  }

  getNumbers(start: number, count: number) {
    for (let i = start; i <= count; ++i) {
      // Log every value
      this.logger.log(`value ${i}`);
    }

    // Log once when producing values is done
    this.logger.info('complete');
  }

  withRxjs() {
    // At this point, we are creating a new `Observable`.
    // Notice how, even though we are using variables, we
    // already defined the full behaviour what this particular
    // `Observable` will emit. This makes `Observable`s descriptive.
    const myAWesomeObservable = this.getNumbers$(this.start, this.count);

    // If you uncomment the line below, you will see that
    // nothing will happen even though the `Observable`
    // was created. This is because the `Observable` must
    // be subscribed to in order to perform its operation.
    // return;

    // Here we are subscribing to the `Observable`, which
    // means that we are registering callbacks to _observe_
    // values emitted by the `Observable` - but we aren't able
    // to pass any other parameter that would alter the
    // `Observable`s behavior.
    myAWesomeObservable.subscribe({
      // Notice also how we are able to extract this part of the
      // code from the implementation of the generation of the
      // values itself.
      next: (i) => {
        this.logger.log(`value ${i}`);
      },
      complete: () => {
        this.logger.info('complete');
      },
    });
  }

  getNumbers$(start: number, count: number) {
    return new Observable<number>((subscriber) => {
      // TODO: Implement using `next` and `complete`
    });
  }
}
