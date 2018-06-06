import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxEasypiechartModule } from 'ngx-easypiechart';

import {

} from 'ngx-easypiechart';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxEasypiechartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
