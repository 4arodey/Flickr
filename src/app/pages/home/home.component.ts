import { Component, ViewChild } from '@angular/core';
import { CustomAny } from 'src/app/interfaces/generic';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public items: Array<CustomAny>;
  public pageIndex = 0;

  public readonly ITEMS_LENGTH = 100;

  public changeItems(items: object[]): void {
    this.items = items;
  }

  public changePage(pageIndex: number): void {
    this.pageIndex = pageIndex;
  }
}
