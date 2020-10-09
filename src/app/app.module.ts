import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComputeDemoComponent } from './compute/compute-demo/compute-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ComputeDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
