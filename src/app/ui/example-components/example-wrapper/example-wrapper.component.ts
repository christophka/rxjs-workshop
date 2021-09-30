import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, Router } from '@angular/router';
import { combineLatest, ReplaySubject, Subject } from 'rxjs';
import {
  filter,
  map,
  pairwise,
  shareReplay,
  startWith,
  takeUntil,
} from 'rxjs/operators';
import { ExampleStep } from 'src/app/ui/example-components/types/example.type';
import { ConsoleService } from 'src/app/ui/console/components/console/console.service';

function isNavigationEnd(e: Event): e is NavigationEnd {
  return e instanceof NavigationEnd;
}

function isDefined<T>(other: T | undefined): other is T {
  return other !== undefined;
}

function findFromSteps(steps: ExampleStep[]) {
  return (url: string) => {
    return steps.find((e) => e.link === url);
  };
}

@Component({
  selector: `app-example-wrapper`,
  templateUrl: './example-wrapper.component.html',
  styleUrls: ['./example-wrapper.component.scss'],
})
export class ExampleWrapperComponent implements OnDestroy, OnChanges {
  /** Collection of steps for this example */
  @Input() steps: ExampleStep[] = [];
  /** Set to true, if the console should be cleared upon navigating examples */
  @Input() clearOnNavigation = false;

  private readonly destroyed$ = new ReplaySubject<boolean>(1);
  private readonly stepsSubject = new Subject<ExampleStep[]>();

  private readonly steps$ = this.stepsSubject.asObservable();

  private readonly pathFromRoot: string = '';
  private readonly logger = this.consoleService.scopedLogger('examples');

  /**
   * Emits router navigation end events
   */
  private navigationEnd$ = this.router.events.pipe(filter(isNavigationEnd));
  private navigatedTo$ = this.navigationEnd$.pipe(
    map((e) => e.urlAfterRedirects.replace(this.pathFromRoot, ''))
  );

  private openedExample$ = combineLatest([this.navigatedTo$, this.steps$]).pipe(
    map(([url, steps]) => findFromSteps(steps)(url)),
    filter(isDefined),
    shareReplay(1)
  );

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private consoleService: ConsoleService
  ) {
    this.pathFromRoot = this.route.snapshot.pathFromRoot
      .map((p) => p.url)
      .join('/');

    this.openedExample$
      .pipe(
        startWith(null),
        pairwise(),
        takeUntil(this.destroyed$.asObservable())
      )
      .subscribe(([prev, cur]) => {
        if (this.clearOnNavigation) {
          consoleService.clear();
        } else {
          if (prev) {
            this.logger.debug(`Closing example '${prev.title}'`, prev.link);
          }

          if (cur) {
            this.logger.debug(`Opening example '${cur.title}'`, cur.link);
          }
        }
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.steps) {
      this.stepsSubject.next(changes.steps.currentValue);
    }
  }

  ngOnDestroy(): void {
    this.stepsSubject.complete();
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
