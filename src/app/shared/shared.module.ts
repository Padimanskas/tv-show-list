import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// table components
import { DivTableComponent } from '@shared/components/div-table/div-table.component';
import { TableHeadComponent } from '@shared/components/table-head/table-head.component';
import { ListRowComponent } from '@shared/components/list-row/list-row.component';
import { TableCellComponent } from '@shared/components/table-cell/table-cell.component';

import { TriggerComponent } from '@shared/components/trigger/trigger.component';
import { StatusLabelComponent } from '@shared/components/status-label/status-label.component';
import { SortButtonComponent } from './components/sort-button/sort-button.component';

@NgModule({
  declarations: [
    TriggerComponent,
    ListRowComponent,
    StatusLabelComponent,
    TableCellComponent,
    DivTableComponent,
    TableHeadComponent,
    SortButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TriggerComponent,
    ListRowComponent,
    StatusLabelComponent,
    TableCellComponent,
    DivTableComponent,
    TableHeadComponent,
    SortButtonComponent
  ]
})
export class SharedModule { }
