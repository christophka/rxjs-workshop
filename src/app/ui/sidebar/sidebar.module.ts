import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarItemComponent } from './components/sidebar-item/sidebar-item.component';



@NgModule({
  declarations: [
    SidebarComponent,
    SidebarItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    SidebarItemComponent
  ]
})
export class SidebarModule { }
