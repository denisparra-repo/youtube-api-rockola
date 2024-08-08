import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrl: './search-list.component.css'
})
export class SearchListComponent implements OnInit {
  search : String ="";
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  constructor(private spinner: NgxSpinnerService, private youtubeService: YoutubeService) {}

  ngOnInit() {
    this.spinner.show()
    setTimeout(()=>
    {
    this.spinner.hide()
    },3000)
    this.videos = [];
    this.youTubeService
    .getVideosForChanel('UC_LtA_EtCr7Jp5ofOsYt18g', 15)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(lista => {
    for (let element of lista["items"]) {
    this.videos.push(element)
    }
    });
  } 
}
