import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { ISearchImage } from 'src/app/interfaces/flickr-image';
import {SnackbarService} from 'src/app/services/snackbar.service';
import {AuthService} from 'src/app/services/auth.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  @Output() public cardDeleteEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() id: string;
  @Input() title: string;
  @Input() image: string;
  @Input() savedTags = [];
  @Input() isBookmarks = false;

  public tags = [];
  public isEnabled = true;

  public readonly DELETE_ITEM_MESSAGE: string = 'Item deleted';
  public readonly SAVE_ITEM_MESSAGE: string = 'Item saved';

  constructor(
    private localstorageService: LocalstorageService,
    private snackbarService: SnackbarService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.isEnabled = this.authService.checkUser();
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
