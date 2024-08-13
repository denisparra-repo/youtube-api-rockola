import { Component } from '@angular/core';
import { YoutubeService } from '../youtube.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Video } from '../model/video';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrl: './search-list.component.css',
})
export class SearchListComponent {
  search: string = '';
  videos: Video[] = [];
  idVideo = '';
  image = 'assets/logo.jpg';

  constructor(
    private spinner: NgxSpinnerService,
    private youtubeService: YoutubeService
  ) {}

  updateImage(videoInfo: Video) {
    this.image = videoInfo.snippet.thumbnails.high.url;
  }

  searchVideo() {
    this.spinner.show();
    this.videos = [];
    this.youtubeService.getVideos(this.search).subscribe(lista => {
      this.videos = lista;
      this.spinner.hide();
    });
  }

  changes(e: YT.OnStateChangeEvent) {
    if (e.target.getPlayerState() == 0) {
      this.idVideo = '';
    }
  }

  play(video: Video) {
    this.idVideo = video.id.videoId;
    setTimeout(() => {
      document.getElementsByTagName('iframe')[0].className = 'fullScreen';
    }, 1000);
  }
}
