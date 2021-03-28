export interface ISearchImage {
  url: string;
  title: string;
  tags?: Array<string>;
}

export interface IFlickrImage {
  farm: string;
  id: string;
  secret: string;
  server: string;
  title: string;
}

export interface IFlickrOutput {
  photos: {
    photo: IFlickrImage[];
  };
}
