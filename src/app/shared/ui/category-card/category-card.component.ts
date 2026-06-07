import { Component, input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Category } from '../../models/catalog.models';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [RouterLink, DecimalPipe],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss',
})
export class CategoryCardComponent {
  readonly category = input.required<Category>();
}
