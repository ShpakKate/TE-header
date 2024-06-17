import { Component, EventEmitter, Output } from '@angular/core';
import { BUTTONS_SEARCH } from '../../constants/buttons';
import { NgForOf } from '@angular/common';
import { Button } from '../../shared/enum/button';

@Component({
  selector: 'app-header-search-buttons',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './header-search-buttons.component.html',
  styleUrl: './header-search-buttons.component.scss'
})
export class HeaderSearchButtonsComponent {
  public searchBtn = BUTTONS_SEARCH;

  @Output() onSearchEvent = new EventEmitter();

  openWindow(button: string) {
    switch (button) {
      case Button.SEARCH: {
        this.onSearchEvent.emit();
      }
        break;
    }
  }
}
