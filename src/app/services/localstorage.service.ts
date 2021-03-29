import { Injectable } from '@angular/core';
import { ISearchImage } from 'src/app/interfaces/flickr-image';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  public readonly LOCALSTORAGE_DB_NAME: string = 'flickr_items';

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
    const itemArray: any  = [...this.getItems() || []];
    const updatedItemArray = itemArray.filter(item => item.id !== id);

    localStorage.setItem(this.LOCALSTORAGE_DB_NAME, JSON.stringify(updatedItemArray));
  }
}
