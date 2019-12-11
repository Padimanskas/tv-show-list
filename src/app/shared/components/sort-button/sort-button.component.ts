import {
  Component, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface ISortPayload {
  fieldName: string;
  sortDirection: string;
  group: boolean;
}

@Component({
  selector: 'sort-button',
  templateUrl: './sort-button.component.html',
  styleUrls: [ './sort-button.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortButtonComponent implements OnInit {

  @Input() fieldName: string;
  @Output() onDirectionChanged: EventEmitter<ISortPayload> = new EventEmitter();
  private sortStates: any = [ null, true, false ];
  public sortDirection: boolean | null = null;
  private statesCounter: number = 0;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  private changeSortDirection() {
    this.sortDirection = this.sortStates[(this.statesCounter++) % this.sortStates.length];
    if (this.statesCounter >= this.sortStates.length) {
      this.statesCounter = 0;
    }
    this.changeDetectorRef.markForCheck();
  }

  public sort(event: MouseEvent) {
    this.changeSortDirection();
    this.onDirectionChanged.emit({fieldName: this.fieldName, sortDirection: this.getSortDirectionAsStr(), group: event.ctrlKey});
  }

  private getSortDirectionAsStr() {
    return ({[null as any]: '', [true as any]: 'ASC', [false as any]: 'DESC'})[<any>this.sortDirection];
  }

  public getSortDirectionAsGlyph() {
    return ({[null as any]: '&udarr;', [true as any]: '&darr;', [false as any]: '&uarr;'})[<any>this.sortDirection];
  }

  public setDefaultState() {
    this.statesCounter = 0;
    this.changeSortDirection();
  }

  public getArrowStyleClass() {
    return ({[null as any]: '', [true as any]: 'down-arrow', [false as any]: 'up-arrow'})[<any>this.sortDirection];
  }

  ngOnInit() {
    this.changeSortDirection();
  }

}
