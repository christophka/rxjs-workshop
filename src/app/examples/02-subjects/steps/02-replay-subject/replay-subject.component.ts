import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import {
  ConsoleService,
  logObserver,
} from 'src/app/ui/console/components/console/console.service';

@Component({
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss'],
})
export class ReplaySubjectStepComponent implements OnInit, OnDestroy {
  private readonly logger = this.consoleService.scopedLogger('02-replay');
  public readonly file = `/examples/02-subjects/steps/02-replay-subject/replay-subject.component.ts`;

  private readonly value$ = new ReplaySubject<number>(4);

  constructor(private consoleService: ConsoleService) {}

  ngOnInit(): void {
    // 1. Subscription
    this.logger.warn('1. subscription');
    this.value$.subscribe(logObserver(this.logger, 'listener 1'));

    // Now some values
    this.logger.info('emitting next values');
    this.value$.next(1);
    this.value$.next(2);

    // 2. Subscription - Notice that the last 2 emissions are instantly emitted
    this.logger.warn('2. subscription');
    this.value$.subscribe(logObserver(this.logger, 'listener 2'));

    // ...and of course new emissions (now with both observers)
    this.logger.info('emitting next values');
    this.value$.next(3);
    this.value$.next(4);
    this.value$.next(5);

    // 3. Subscription - Notice that only the last 4 emissions are instantly emitted
    this.logger.warn('3. subscription');
    this.value$.subscribe(logObserver(this.logger, 'listener 3'));

    // Now emit some more values
    this.logger.info('emitting next values');
    this.value$.next(6);
    this.value$.next(7);
  }

  ngOnDestroy(): void {
    this.value$.complete();
  }
}
