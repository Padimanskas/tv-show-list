import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'button-list',
  templateUrl: './button-list.component.html',
  styleUrls: ['./button-list.component.scss']
})
export class ButtonListComponent implements OnInit {

  @Output() public onClick: EventEmitter<any> = new EventEmitter();
  @Input() buttons: any[] = [
    {
      label: '3',
      value: 3,
      active: false
    },
    {
      label: '5',
      value: 5,
      active: false
    },
    {
      label: '10',
      value: 10,
      active: false
    }
  ];

  public currentButton: any;

  constructor() { }

  ngOnInit() {
    this.changeItemsCountOnPage(this.buttons[1]);
  }

  uncheckAllButtons() {
    this.buttons.map((button) => {
      button.active = false;
    });
  }

  changeItemsCountOnPage(currentButton: any) {
    this.currentButton = currentButton;
    this.uncheckAllButtons();
    const clickedButton = this.buttons.find(button => button.value === currentButton.value);
    clickedButton.active = true;
    this.onClick.emit(currentButton.value);
  }

}
