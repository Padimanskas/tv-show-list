import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'status-label',
  templateUrl: './status-label.component.html',
  styleUrls: ['./status-label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusLabelComponent implements OnInit {

  @Input() status: string;

  constructor() { }

  get isEnabled() { return this.status === 'ENABLED';}

  ngOnInit() {
  }

}
