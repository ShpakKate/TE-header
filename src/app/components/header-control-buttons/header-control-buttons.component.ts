import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { BUTTONS_CONTROL } from '../../constants/buttons';

@Component({
  selector: 'app-header-control-buttons',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './header-control-buttons.component.html',
  styleUrl: './header-control-buttons.component.scss'
})
export class HeaderControlButtonsComponent {
  public controlBtn = BUTTONS_CONTROL;
}
