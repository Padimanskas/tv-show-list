import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'drop-down-list',
  templateUrl: './drop-down-list.component.html',
  styleUrls: ['./drop-down-list.component.scss']
})
export class DropDownListComponent {

  public selectedItem: string;
  @Input() items: string[] | Date[] = [];
  @Output() onSelectItem: EventEmitter<string> = new EventEmitter();
  @HostListener('select', ['$event']) onSelect(event) {
    this.onSelectItem.emit(event);
  }

}
