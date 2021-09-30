import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import {
  ConsoleService,
  logObserver,
} from 'src/app/ui/console/components/console/console.service';

@Component({
  templateUrl: './subject-application.component.html',
  styleUrls: ['./subject-application.component.scss'],
})
export class SubjectApplicationStepComponent implements OnInit, OnDestroy {
  private readonly logger = this.consoleService.scopedLogger('03-subjects');

  private readonly clickedSubject = new Subject();
  private readonly eventViewsSubject = new BehaviorSubject<number>(0);
  // private readonly openViewSubject = new BehaviorSubject<number | null>(null);
  private readonly eventSubject = new ReplaySubject<string>(3);

  public readonly clicked$ = this.clickedSubject.asObservable();
  public readonly eventViews$ = this.eventViewsSubject.asObservable();

  // public readonly openView$ = this.openViewSubject.asObservable();
  public readonly latestEvents$ = this.eventSubject.asObservable();

  public get eventViews() {
    return this.eventViewsSubject.value;
  }

  constructor(private consoleService: ConsoleService) {}

  ngOnInit(): void {
    this.clickedSubject.subscribe(() =>
      this.eventViewsSubject.next(this.eventViewsSubject.value + 1)
    );
  }

  ngOnDestroy() {
    this.clickedSubject.complete();
    this.eventViewsSubject.complete();
    // this.openViewSubject.complete();
    this.eventSubject.complete();
  }

  onNextClicked() {
    this.clickedSubject.next();
    this.eventSubject.next(`click: ${'add'}`);
  }

  onPrintLatestEventsClick() {
    // Subscribe...
    const sub = this.latestEvents$.subscribe(logObserver(this.logger));

    // and immediately unsubscribe
    sub.unsubscribe();
  }

  onNumberChange(event: Event) {
    const newValue = Number.parseInt((event.target! as any).value, 10);
    this.eventViewsSubject.next(newValue);
    this.eventSubject.next(`change: ${newValue}`);
  }

  public arrayFromCount(count: number) {
    return [...new Array(count)].map((_, i) => i);
  }
}
