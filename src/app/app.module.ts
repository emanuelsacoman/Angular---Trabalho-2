import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RandomNumberComponentComponent } from './random-number-component/random-number-component.component';
import { NumberDisplayComponentComponent } from './number-display-component/number-display-component.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomNumberComponentComponent,
    NumberDisplayComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
