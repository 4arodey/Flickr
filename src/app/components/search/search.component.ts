import {Component, Output, EventEmitter} from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { SearchImage } from 'src/app/interfaces/flickr-image';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() onChanged = new EventEmitter();
  constructor(private flickrService: SearchService) { }

  search(event: any): void {
    const keyword = event.target.value.toLowerCase();

    if (keyword && keyword.length > 0) {
      this.flickrService.getItems(keyword)
        .subscribe(
          (res: SearchImage[]) => {
            this.onChanged.emit(res);
          }
        );
    }
  }
}
