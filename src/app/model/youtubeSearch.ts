import { Video } from './video';

interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface YoutubeSearchResponse {
  etag: string;
  items: Video[];
  kind: string;
  nextPageToken: string;
  pageInfo: PageInfo;
  regionCode: string;
}
