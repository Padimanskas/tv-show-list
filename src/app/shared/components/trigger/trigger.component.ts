import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'trigger',
  templateUrl: './trigger.component.html',
  styleUrls: [ './trigger.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TriggerComponent {

  @Input() public triggerId: number;
  @Input() public triggerState: boolean;
  @Input() public disabled: boolean;
  @Output() public onCheck: EventEmitter<boolean> = new EventEmitter();

  public triggerOnChange(target: HTMLInputElement) {
    if (!this.disabled) this.onCheck.emit(target.checked);
  }

}
