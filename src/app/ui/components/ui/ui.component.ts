import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
})
export class UiComponent implements OnInit {
  /**
   * boolean used to open or close aside element
   */
  public open = true;
  constructor() {}

  ngOnInit(): void {}

  /**
   * fn to open or close aside menu
   */
  public toggle() {
    this.open = !this.open;
  }
}
