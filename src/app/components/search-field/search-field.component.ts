import { Component, Input } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-search-field',
  standalone: true,
  imports: [
    FilterComponent,
    NgIf
  ],
  templateUrl: './search-field.component.html',
  styleUrl: './search-field.component.scss'
})
export class SearchFieldComponent {
  @Input() isSearchField = false;
}
