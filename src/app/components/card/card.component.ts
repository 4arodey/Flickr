import { Component, Input } from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { ISearchImage } from 'src/app/interfaces/flickr-image';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title: string | undefined;
  @Input() image: string | undefined;

  public readonly LOCALSTORAGE_DB_NAME: string = 'flickr_items';

  public tags = [];

  constructor(private localstorageService: LocalstorageService) {
  }

  public sendToLocalstorage(): void {
    const item: ISearchImage = { url: this.image, title: this.title, tags: this.tags };

    this.localstorageService.setItems(item);
  }

  public applyTags(eventValue): void {
    this.tags = eventValue;
  }
}
