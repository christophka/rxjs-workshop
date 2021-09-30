import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, OperatorFunction } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';
import { ConsoleService } from 'src/app/ui/console/components/console/console.service';

function isEven(): OperatorFunction<number, boolean> {
  return map((n) => n % 2 === 0);
}

function invert() {
  return map<boolean, boolean>((someBoolean) => !someBoolean);
}

@Component({
  templateUrl: './some-basic-operators-step.component.html',
  styleUrls: ['./some-basic-operators-step.component.scss'],
})
export class SomeBasicOperatorsStepComponent implements OnInit {
  // private readonly logger = this.consoleService.scopedLogger('01-operator');

  public readonly numberSubject = new BehaviorSubject<number>(10);
  public readonly isEvenNumber$ = this.numberSubject
    .asObservable()
    .pipe(isEven(), invert());

  public set theNumber(value: number) {
    this.numberSubject.next(value);
  }

  public get theNumber() {
    return this.numberSubject.value;
  }

  constructor(private consoleService: ConsoleService) {}

  ngOnInit(): void {}
}
