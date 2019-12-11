import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.scss'],
  host: {'class': 'divTableCell'}
})
export class TableCellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
