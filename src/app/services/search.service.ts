import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IFlickrImage, IFlickrOutput } from 'src/app/interfaces/flickr-image';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) {}

  getItems(keyword: string, pageIndex: number): Observable<Array<object>> {
    const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&';
    const params = `api_key=${environment.flickr.key}&text=${keyword}&tags=${keyword}&format=json&nojsoncallback=1&per_page=10&page=${pageIndex}`;
    const urlArr = [];

    return  this.http.get(url + params).pipe(
      map((res: IFlickrOutput) => {
        res.photos.photo.forEach((ph: IFlickrImage) => {
          const photoObj = {
            url: `https://farm${ph.farm}.staticflickr.com/${ph.server}/${ph.id}_${ph.secret}`,
            title: ph.title
          };
          urlArr.push(photoObj);
        });
        return urlArr;
      })
    );
  }
}
