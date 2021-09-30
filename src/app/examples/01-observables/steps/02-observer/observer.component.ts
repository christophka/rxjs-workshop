import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';
import {
  ConsoleService,
  logObserver,
} from 'src/app/ui/console/components/console/console.service';

@Component({
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.scss'],
})
export class ObserverStepComponent implements OnInit {
  private readonly logger = this.consoleService.scopedLogger('02-observer');

  constructor(private consoleService: ConsoleService) {}

  ngOnInit(): void {
    // Here we're creating an observer. If you look at the
    // implementation of `logObserver` you see that nothing fancy
    // is going on, we are just returning an object with
    // 3 properties, one for each notification type.
    const observer = logObserver(this.logger);

    // This would be essentially the same...
    // const observer = {
    //   next: () => { /*...*/ },
    //   complete:()=>{ /*...*/ },
    //   error:()=>{ /*...*/ },
    // }
    // what you do in these callbacks is completely up to you.

    // This creates an Observable that emits `10` values
    // starting from `0`.
    const range$ = range(0, 10);

    // This example uses the created `Observer` when subscribing.
    range$.subscribe(observer);

    // But we could also do a subscription without any observer
    // range$.subscribe();

    // Or with only an observer for the next emitted value
    range$.subscribe((i) => this.logger.warn(`next ${i}`));
    // which is just a shorthand for
    // range$.subscribe({ next: (i) => this.logger.warn(`next ${i}`) });
  }
}
