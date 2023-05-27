import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
} from '@taiga-ui/core';

import { NavBarModule } from '@fchat-admin/widgets';

import { AppComponent } from './app.component';
import { pagesRoutes } from './pages';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      pagesRoutes,
      {
        initialNavigation: 'enabledBlocking'
      }
    ),
      BrowserAnimationsModule,
      TuiRootModule,
      TuiDialogModule,
      TuiAlertModule,
      NavBarModule,
],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
