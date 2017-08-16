import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MediaPlayerButtonComponent } from './media-player-button.component';

@NgModule({
  declarations: [
    MediaPlayerButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MediaPlayerButtonComponent]
})
export class MediaPlayerButtonModule { }
