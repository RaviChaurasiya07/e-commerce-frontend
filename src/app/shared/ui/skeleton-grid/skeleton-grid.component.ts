import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-skeleton-grid',
  standalone: true,
  templateUrl: './skeleton-grid.component.html',
  styleUrl: './skeleton-grid.component.scss',
})
export class SkeletonGridComponent {
  readonly count = input(6);
  readonly placeholders = computed(() => Array.from({ length: this.count() }, (_, index) => index));
}
