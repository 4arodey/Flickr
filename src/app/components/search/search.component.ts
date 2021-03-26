import { Component, Output, EventEmitter, ViewChild, ElementRef, Input, OnChanges } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { ISearchImage } from 'src/app/interfaces/flickr-image';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnChanges {
  @ViewChild('searchInput') searchInput: ElementRef;
  @Input() pageIndex: number;
  @Output() public loadItems = new EventEmitter();

  constructor(private searchService: SearchService) { }

  ngOnChanges(): void {
    if (this.searchInput) {
      const keyword = this.searchInput.nativeElement.value.toLowerCase();

      this.search(keyword);
    }
  }

  search(keyword: any): void {
    if (keyword && keyword.length > 0) {
      this.searchService.getItems(keyword, this.pageIndex)
        .subscribe(
          (res: ISearchImage[]) => {
            this.loadItems.emit(res);
          }
        );
    }
  }
}
