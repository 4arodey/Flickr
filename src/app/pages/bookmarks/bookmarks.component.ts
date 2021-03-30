import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import {formatNumber} from '@angular/common';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {
  public items: any;

  public readonly FIRST_PAGE_INDEX: number = 0;

  constructor(private cdr: ChangeDetectorRef, private localstorageService: LocalstorageService) {
  }

  ngOnInit(): void {
    this.localstorageService.changePage(this.FIRST_PAGE_INDEX);
    this.items = this.localstorageService.getSavedItems();
  }

  changeItems(items: any): void {
    this.items = items;
  }

  changePage(): void {
      this.items = this.localstorageService.getSavedItems();
      this.cdr.detectChanges();
  }

  public removeCard(value: boolean): void {
    if (value) {
      this.items = this.localstorageService.getSavedItems();
      this.cdr.detectChanges();
    }
  }
}
