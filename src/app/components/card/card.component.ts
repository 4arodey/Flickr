import {Component, EventEmitter, Input, Output} from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { ISearchImage } from 'src/app/interfaces/flickr-image';
import {SnackbarService} from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Output() public cardDeleteEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() id: string;
  @Input() title: string;
  @Input() image: string;
  @Input() savedTags = [];
  @Input() isBookmarks = false;

  public readonly DELETE_ITEM_MESSAGE: string = 'Item deleted';
  public readonly SAVE_ITEM_MESSAGE: string = 'Item saved';

  public tags = [];

  constructor(private localstorageService: LocalstorageService, private snackbarService: SnackbarService) {
  }

  public saveToLocalstorage(): void {
    this.snackbarService.show(this.SAVE_ITEM_MESSAGE);
    const item: ISearchImage = { id: this.localstorageService.generateUUID(), url: this.image, title: this.title, tags: this.tags };

    this.localstorageService.setItems(item);
  }

  public applyTags(eventValue): void {
    this.tags = eventValue;
  }

  public get formatSavedTags(): string {
    return this.savedTags.toString().split(',').join(', ');
  }

  public removeItem(): void {
    this.snackbarService.show(this.DELETE_ITEM_MESSAGE);
    this.localstorageService.removeItem(this.id);
    this.cardDeleteEvent.emit(true);
  }
}
