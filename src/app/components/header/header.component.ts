import { Component } from '@angular/core';
import { HeaderControlButtonsComponent } from '../header-control-buttons/header-control-buttons.component';
import { NgClass, NgIf, NgOptimizedImage } from '@angular/common';
import { HeaderSearchButtonsComponent } from '../header-search-buttons/header-search-buttons.component';
import { SearchFieldComponent } from '../search-field/search-field.component';
import { FilterComponent } from '../filter/filter.component';
import { ControlButtonsMobileComponent } from '../control-buttons-mobile/control-buttons-mobile.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    HeaderControlButtonsComponent,
    NgOptimizedImage,
    HeaderSearchButtonsComponent,
    NgClass,
    SearchFieldComponent,
    NgIf,
    FilterComponent,
    ControlButtonsMobileComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public isSearchField = false

  searchEvent($event: any) {
    this.isSearchField = true;
  }
}
