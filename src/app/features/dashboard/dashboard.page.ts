import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SectionHeaderComponent } from '../../shared/ui/section-header/section-header.component';
import { MetricTileComponent } from '../../shared/ui/metric-tile/metric-tile.component';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [SectionHeaderComponent, MetricTileComponent],
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.scss',
})
export class DashboardPage {
  private readonly route = inject(ActivatedRoute);
  readonly data = this.route.snapshot.data;
  readonly metrics = [
    { label: 'Revenue', value: '$4.2M', note: 'Rolling 30-day total' },
    { label: 'Conversion', value: '4.8%', note: 'Checkout completion rate' },
    { label: 'Fulfillment', value: '98.1%', note: 'On-time shipping' },
  ];
}

