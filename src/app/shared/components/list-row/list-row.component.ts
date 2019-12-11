import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'list-row',
  templateUrl: './list-row.component.html',
  styleUrls: ['./list-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListRowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
