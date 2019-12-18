import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// table components
import { DivTableComponent } from '@shared/components/div-table/div-table.component';
import { TableHeadComponent } from '@shared/components/table-head/table-head.component';
import { ListRowComponent } from '@shared/components/list-row/list-row.component';
import { TableCellComponent } from '@shared/components/table-cell/table-cell.component';
import { StatusLabelComponent } from '@shared/components/status-label/status-label.component';
import { SortButtonComponent } from './components/sort-button/sort-button.component';
import { RectButtonComponent } from './components/rect-button/rect-button.component';
import { ButtonListComponent } from './components/button-list/button-list.component';
import { LiveSearchInputComponent } from './components/live-search-input/live-search-input.component';
import { DropDownListComponent } from './components/drop-down-list/drop-down-list.component';
import { DropDownDateListComponent } from './components/drop-down-date-list/drop-down-date-list.component';

@NgModule({
  declarations: [
    ListRowComponent,
    StatusLabelComponent,
    TableCellComponent,
    DivTableComponent,
    TableHeadComponent,
    SortButtonComponent,
    RectButtonComponent,
    ButtonListComponent,
    LiveSearchInputComponent,
    DropDownListComponent,
    DropDownDateListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [

    ListRowComponent,
    StatusLabelComponent,
    TableCellComponent,
    DivTableComponent,
    TableHeadComponent,
    SortButtonComponent,
    RectButtonComponent,
    ButtonListComponent,
    LiveSearchInputComponent,
    DropDownListComponent,
    DropDownDateListComponent
  ]
})
export class SharedModule { }
