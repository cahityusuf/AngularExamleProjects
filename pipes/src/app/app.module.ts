import { NgLocaleLocalization, NgLocalization } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConvertPipe } from './convert.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ConvertPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: NgLocalization, useClass: NgLocaleLocalization }],
  bootstrap: [AppComponent]
})
export class AppModule { }
