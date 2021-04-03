import { Injectable } from '@angular/core';
import { ISearchImage } from 'src/app/interfaces/flickr-image';
import {CustomAny} from 'src/app/interfaces/generic';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  public readonly  LOCALSTORAGE_DB_NAME = 'flickr_items';
  public pageIndex = 0;

  public getSavedItems(): void {
    const item = localStorage.getItem(this.LOCALSTORAGE_DB_NAME);
    const pageStartIndexItem = this.pageIndex * 10;
    const pageEndIndexItem = pageStartIndexItem + 10;

    return JSON.parse(item).slice(pageStartIndexItem, pageEndIndexItem);
  }

  public getItems(): string {
    const item = localStorage.getItem(this.LOCALSTORAGE_DB_NAME);
    return JSON.parse(item);
  }

  public setItems(value: ISearchImage): void {
    const itemArray = [...this.getItems() || []];

    itemArray.unshift(JSON.parse(JSON.stringify(value)));
    localStorage.setItem(this.LOCALSTORAGE_DB_NAME, JSON.stringify(itemArray));
  }

  public generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      // tslint:disable-next-line:no-bitwise one-variable-per-declaration
      const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  public removeItem(id: string): void {
    const itemArray: CustomAny  = [...this.getItems() || []];
    const updatedItemArray = itemArray.filter(item => item.id !== id);

    localStorage.setItem(this.LOCALSTORAGE_DB_NAME, JSON.stringify(updatedItemArray));
  }

  public changePage(value): void {
    this.pageIndex = value;
  }
}
