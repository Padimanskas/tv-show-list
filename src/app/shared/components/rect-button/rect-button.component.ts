import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'rect-button',
  templateUrl: './rect-button.component.html',
  styleUrls: ['./rect-button.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class RectButtonComponent {

  @Input() active = false;
  @Input() caption = '';

/*  @Output() public onClick: EventEmitter<any> = new EventEmitter();

  @HostListener('mousedown') onMousedown() {
    this.onClick.emit(event);
    this.changeDetectorRef.markForCheck();
  }*/

  constructor(private changeDetectorRef: ChangeDetectorRef) { }
}
