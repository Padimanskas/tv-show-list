import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'table-head',
  templateUrl: './table-head.component.html',
  styleUrls: ['./table-head.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableHeadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
