import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import {IPageChange} from 'src/app/interfaces/flickr-image';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Output() public pageChangedEvent: EventEmitter<number> = new EventEmitter<number>();

  public pageIndex = 0;
  public pageSizeOptions = [10];
  public pageSize = 10;
  public pageEvent: PageEvent;

  public readonly ITEMS_LENGTH: number = 100;

  ngOnInit(): void {
  }

  public changePage(eventValue: IPageChange ): void {
    this.pageChangedEvent.emit(eventValue.pageIndex + 1);
  }
}
