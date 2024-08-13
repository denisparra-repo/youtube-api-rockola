interface Id {
  kind: string;
  videoId: string;
}

interface Thumbnail {
  default: ThumbnailItem;
  high: ThumbnailItem;
  medium: ThumbnailItem;
}

interface ThumbnailItem {
  url: string;
  width: number;
  height: number;
}

interface Snnipet {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  publishTime: string;
  publishedAt: string;
  thumbnails: Thumbnail;
  title: string;
}

export interface Video {
  etag: string;
  id: Id;
  kind: string;
  snippet: Snnipet;
}
