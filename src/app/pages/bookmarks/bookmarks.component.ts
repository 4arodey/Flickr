import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {
  public items: any;
  public pageIndex = 0;

  constructor(private localstorageService: LocalstorageService) {
  }

  ngOnInit(): void {
    this.items = this.localstorageService.getItems();
  }

  changeItems(items: any): void {
    this.items = items;
  }

  changePage(pageIndex: number): void {
    this.pageIndex = pageIndex;
  }
}
