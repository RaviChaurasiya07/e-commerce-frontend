import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.scss',
})
export class SectionHeaderComponent {
  readonly eyebrow = input<string>('');
  readonly title = input.required<string>();
  readonly subtitle = input<string>('');
  readonly actionLabel = input<string>('');
  readonly actionPath = input<string>('');
}

