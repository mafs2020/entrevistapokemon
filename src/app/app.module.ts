import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// rutas padre
import { rutasPadreModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    rutasPadreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
