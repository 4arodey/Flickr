import { Component, Input } from '@angular/core';
import { SearchImage } from 'src/app/interfaces/flickr-image';

@Component({
  selector: 'app-card-preview',
  templateUrl: './card-preview.component.html',
  styleUrls: ['./card-preview.component.scss']
})
export class CardPreviewComponent {
  @Input() items: SearchImage[] = [];
}
