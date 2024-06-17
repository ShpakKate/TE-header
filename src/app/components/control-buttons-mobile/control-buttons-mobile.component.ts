import { Component } from '@angular/core';
import { BUTTONS_MOBILE } from '../../constants/buttons';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-control-buttons-mobile',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './control-buttons-mobile.component.html',
  styleUrl: './control-buttons-mobile.component.scss'
})
export class ControlButtonsMobileComponent {
  public buttons = BUTTONS_MOBILE;
}
