import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrl: './search-list.component.css'
})
export class SearchListComponent {
  search : string ="";
  videos: any[] = [];
  idVideo = ""
  startSeconds: number = 60;
  endSeconds = 75;
  data: any = {'autoplay': 1,  'rel': 0, 'fs': 1, 'disablekb': 1}
  innertHTMLText= ""
  image = "assets/logo.jpg";
  isImageDisplayed = true;
  constructor(private spinner: NgxSpinnerService, private youtubeService: YoutubeService) {}


  selectVideo(videoInfo: any) {
    //this.idVideo = videoInfo.id.videoId;
    this.image = videoInfo.snippet.thumbnails.high.url;
  }

  searchVideo() {
    this.spinner.show()
    this.videos = [];
    this.youtubeService
    .getVideos(this.search)
    .subscribe(lista => {
      console.log(lista)
    this.videos = lista
    console.log(this.videos)
    this.spinner.hide()
    });
  }

  changes(e: any) {
    console.log(e);
    console.log(e.target.getPlayerState());
    if (e.target.getPlayerState() == 0) {
      this.idVideo = "";
    }
  }

  onSelection(e: any) {
    console.log(e)
  }

  play(video: any) {
    this.idVideo = video.id.videoId;
    setTimeout(() => {document.getElementsByTagName("iframe")[0].className = "fullScreen";}, 2000);
  }

  playFullScreen(e: any) {
    console.log("ready::", e);
    (<any>document.getElementById('player'))?.contentWindow.requestFullscreen();
  }

}
