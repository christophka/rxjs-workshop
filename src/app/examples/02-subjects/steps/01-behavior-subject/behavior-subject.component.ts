import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ConsoleService } from 'src/app/ui/console/components/console/console.service';

@Component({
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.scss'],
})
export class BehaviorSubjectComponent implements OnInit, OnDestroy {
  private readonly logger = this.consoleService.scopedLogger('01-subjects');

  public readonly file = `/examples/02-subjects/steps/01-behavior-subject/behavior-subject.component.ts`;

  private readonly clicked$ = new Subject();
  private readonly value$ = new BehaviorSubject<string>('enter message');

  constructor(private consoleService: ConsoleService) {}

  get value() {
    // returns the last emitted value
    return this.value$.value;
  }
  set value(value) {
    // Emit that a new value was written from the input
    this.value$.next(value);
  }

  ngOnInit(): void {
    this.clicked$.subscribe(() => {
      this.logger.log('clicked!');
    });

    // Notice that this immediately emits the value from
    // the BehaviorSubject with which we initialized it.
    this.value$.subscribe((value) => {
      this.logger.log(`value: '${value}'`);
    });
  }

  ngOnDestroy(): void {
    // Complete subjects when component is destroyed.
    this.clicked$.complete();
    this.value$.complete();
  }

  onSendClicked() {
    // Emit that button was clicked
    this.clicked$.next();
  }
}
