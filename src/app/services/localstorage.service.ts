import { Injectable } from '@angular/core';
import { ISearchImage } from 'src/app/interfaces/flickr-image';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  public readonly LOCALSTORAGE_DB_NAME: string = 'flickr_items';

  getItems(key: string): string {
    const item = localStorage.getItem(key);
    return JSON.parse(item);
  }

  setItems(value: ISearchImage): void {
    console.log(typeof value);
    const itemArray = [...this.getItems(this.LOCALSTORAGE_DB_NAME)];

    itemArray.push(JSON.parse(JSON.stringify(value)));
    localStorage.setItem(this.LOCALSTORAGE_DB_NAME, JSON.stringify(itemArray));
  }
}
