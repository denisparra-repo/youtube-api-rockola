import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SearchListComponent } from './search-list/search-list.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { YouTubePlayer, YOUTUBE_PLAYER_CONFIG } from '@angular/youtube-player';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { YoutubeService } from './youtube.service';
import { NgxSpinnerService, NgxSpinnerModule } from 'ngx-spinner';
import { SafeHtmlPipe } from './safe-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchListComponent,
    SafeHtmlPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatIconModule,
    MatFormFieldModule,
    YouTubePlayer,
    MatInputModule,
    MatListModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [
    provideAnimationsAsync(),
    YoutubeService,
    NgxSpinnerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
