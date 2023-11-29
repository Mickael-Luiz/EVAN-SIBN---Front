import { Component, Input } from '@angular/core';
import { ITableInfo } from 'src/app/interfaces/ITableInfo';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() tableInfo: ITableInfo[] = []
  @Input() tableData: object[] = []

  getProp(data: any, field: string) {
    return data[field]
  }

}
