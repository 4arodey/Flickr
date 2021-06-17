import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TitleFields } from 'src/app/interfaces/table.model';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  @Input() displayedColumns: string[];
  @Input() data: TitleFields[];

  objectValuesToArray(data): string[] {
    return Object.values(data);
  }
}
