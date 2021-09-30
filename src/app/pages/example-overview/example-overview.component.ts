import { Component, OnInit } from '@angular/core';
import { examples } from 'src/app/examples/example-list';

@Component({
  templateUrl: './example-overview.component.html',
  styleUrls: ['./example-overview.component.scss'],
})
export class ExampleOverviewComponent implements OnInit {
  public examples = examples;

  constructor() {}

  ngOnInit(): void {}
}
