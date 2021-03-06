import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { ClassDirective } from './class.directive';
import { PhotoShowComponent } from './photo-show/photo-show.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassDirective,
    PhotoShowComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
