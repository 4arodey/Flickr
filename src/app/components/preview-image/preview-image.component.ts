import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-preview-image',
  templateUrl: './preview-image.component.html',
  styleUrls: ['./preview-image.component.scss']
})
export class PreviewImageComponent {
  @Input() public imgUrl: string;

  constructor(
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: { imageUrl: string, title: string }
    ) {}

  public close(): void {
    this.dialog.closeAll();
  }
}
