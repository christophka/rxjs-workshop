import { Component, ElementRef, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ConsoleService } from './console.service';

const TIME_FORMAT_WITHOUT_MS = 'HH:mm:ss';
const TIME_FORMAT_WITH_MS = `${TIME_FORMAT_WITHOUT_MS}.ms`;

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss'],
})
export class ConsoleComponent {
  @ViewChild('consoleContent') consoleContent?: ElementRef<HTMLDivElement>;

  public readonly timeFormat = TIME_FORMAT_WITHOUT_MS;

  private readonly followLatestSubject = new BehaviorSubject(true);
  public followLatest$ = this.followLatestSubject.asObservable();

  private shouldScroll = false;

  public get followLatest() {
    return this.followLatestSubject.value;
  }

  public logs$ = this.consoleService.logs$.pipe(
    tap(() => (this.shouldScroll = true))
  );

  constructor(private consoleService: ConsoleService) {}

  ngAfterViewChecked() {
    if (this.followLatest && this.shouldScroll) {
      this.scrollToLatest();
    }
  }

  public onClearClicked() {
    this.consoleService.clear();
  }

  public onFollowToggled() {
    this.followLatestSubject.next(!this.followLatest);
  }

  private scrollToLatest() {
    if (this.consoleContent) {
      const el = this.consoleContent.nativeElement;
      el.scrollTo(0, el.scrollHeight);
    }
  }
}
