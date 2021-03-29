import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public items = [];
  public pageIndex = 0;

  changeItems(items: object[]): void {
    this.items = items;
  }

  changePage(pageIndex: number): void {
    this.pageIndex = pageIndex;
  }
}
