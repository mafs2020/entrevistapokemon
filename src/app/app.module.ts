import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// encargado de hacerpeticiones
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
    HttpClientModule,
    BrowserAnimationsModule,
    // ToasterModule.forRoot()
    // BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({autoDismiss:true, closeButton: true, easing: 'ease-in-out'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
