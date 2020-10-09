import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComputeDemoComponent } from './compute-demo/compute-demo.component';
import { GreetDemoComponent } from './greet-demo/greet-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    ComputeDemoComponent,
    GreetDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
