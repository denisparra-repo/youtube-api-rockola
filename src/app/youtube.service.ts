import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { YoutubeSearchResponse } from './model/youtubeSearch';
import { Video } from './model/video';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  private API_URL = 'https://www.googleapis.com/youtube/v3/search';
  private API_TOKEN = '';

  constructor(private http: HttpClient) {}

  getVideos(query: string): Observable<Video[]> {
    const url = `${this.API_URL}?q=${query}&key=${this.API_TOKEN}&part=snippet&type=video&maxResults=20`;
    return this.http
      .get<YoutubeSearchResponse>(url)
      .pipe(map((response: YoutubeSearchResponse) => response.items));
  }
}
