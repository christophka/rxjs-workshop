import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: `app-sidebar-item, a[app-sidebar-item]`,
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
