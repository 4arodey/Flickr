import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { IPageChange } from 'src/app/interfaces/flickr-image';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Output() public pageChangedEvent: EventEmitter<number> = new EventEmitter<number>();
  @Input() public itemLength = 100;

  public pageIndex = 0;
  public pageSizeOptions = [10];
  public pageSize = 10;
  public pageEvent: PageEvent;

  public readonly ITEMS_LENGTH: number = 100;

  constructor(private localstorageService: LocalstorageService) {
  }

  ngOnInit(): void {
  }

  public changePage(eventValue: IPageChange ): void {
    this.localstorageService.changePage(eventValue.pageIndex);
    this.pageChangedEvent.emit(eventValue.pageIndex + 1);
  }
}
