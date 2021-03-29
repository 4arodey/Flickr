import {ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';
import { ISearchImage } from 'src/app/interfaces/flickr-image';
import {LocalstorageService} from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-card-preview',
  templateUrl: './card-preview.component.html',
  styleUrls: ['./card-preview.component.scss']
})
export class CardPreviewComponent {
  @Input() items: any;
  @Input() isBookmarks: boolean;

  constructor(private cdr: ChangeDetectorRef, private localstorageService: LocalstorageService) {
  }

  public removeCard(value: boolean): void {
    if (value) {
      this.items = this.localstorageService.getItems();
      this.cdr.detectChanges();
    }
  }
}
