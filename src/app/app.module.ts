import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// encargado de hacerpeticiones
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
// rutas padre
import { rutasPadreModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    rutasPadreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
