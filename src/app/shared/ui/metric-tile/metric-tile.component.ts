import { Component, input } from '@angular/core';
import { MetricTile } from '../../models/catalog.models';

@Component({
  selector: 'app-metric-tile',
  standalone: true,
  templateUrl: './metric-tile.component.html',
  styleUrl: './metric-tile.component.scss',
})
export class MetricTileComponent {
  readonly metric = input.required<MetricTile>();
}

