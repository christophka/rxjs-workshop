import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { UiModule } from './ui/ui.module';

// Components
import { AppComponent } from './app.component';

// Pages
import { ExampleOverviewComponent } from './pages/example-overview/example-overview.component';
import { FilledExamplePageComponent } from './pages/filled-example-page/filled-example-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppComponent, ExampleOverviewComponent, FilledExamplePageComponent],
  imports: [BrowserModule, AppRoutingModule, UiModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
