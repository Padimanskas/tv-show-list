import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'live-search-input',
  templateUrl: './live-search-input.component.html',
  styleUrls: ['./live-search-input.component.scss']
})
export class LiveSearchInputComponent {
  @Input() fieldName: string = '';
  @Input() filterQuery: string = '';
  @Output() public onInput: EventEmitter<{fieldName: string; fieldValue: string}> = new EventEmitter();
}
