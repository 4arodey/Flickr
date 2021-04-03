import {ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';
import { ISearchImage } from 'src/app/interfaces/flickr-image';
import {LocalstorageService} from 'src/app/services/localstorage.service';
import {CustomAny} from 'src/app/interfaces/generic';

@Component({
  selector: 'app-card-preview',
  templateUrl: './card-preview.component.html',
  styleUrls: ['./card-preview.component.scss']
})
export class CardPreviewComponent {
  @Output() public cardDeleteEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() items: CustomAny;
  @Input() isBookmarks: boolean;

  constructor(private cdr: ChangeDetectorRef) {
  }

  public reloadCards(): void{
    this.cdr.detectChanges();
  }

  public changeCard(value: boolean): void {
    this.cardDeleteEvent.emit(value);
  }
}
