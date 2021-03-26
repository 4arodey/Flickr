import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Output() public pageChangedEvent: EventEmitter<number> = new EventEmitter<number>();

  public pageIndex = 1;
  public pageSizeOptions = [10];
  public pageSize = 10;
  public pageEvent: PageEvent;

  public readonly ITEMS_LENGTH: number = 100;

  ngOnInit(): void {
  }

  public changePage(eventValue: any): void {
    this.pageChangedEvent.emit(eventValue.pageIndex + 1);
  }
}
