import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OtrocompComponent } from './otrocomp/otrocomp.component';

@NgModule({
  declarations: [
    AppComponent,
    OtrocompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
