import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'drop-down-date-list',
  templateUrl: './drop-down-date-list.component.html',
  styleUrls: ['./drop-down-date-list.component.scss']
})
export class DropDownDateListComponent {

  public selectedItem: string;
  @Input() items: Date[] = [];
  @Output() onSelectItem: EventEmitter<string> = new EventEmitter();
  @HostListener('select', ['$event']) onSelect(event) {
    this.onSelectItem.emit(event);
  }

}
