import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MediaPlayerButtonComponent } from '../media-player-button/media-player-button.component';

@NgModule({
  declarations: [
    AppComponent, 
    MediaPlayerButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
