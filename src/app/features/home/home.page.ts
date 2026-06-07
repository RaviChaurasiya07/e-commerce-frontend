import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CatalogDataService } from '../../shared/services/catalog-data.service';
import { CategoryCardComponent } from '../../shared/ui/category-card/category-card.component';
import { MetricTileComponent } from '../../shared/ui/metric-tile/metric-tile.component';
import { ProductCardComponent } from '../../shared/ui/product-card/product-card.component';
import { SectionHeaderComponent } from '../../shared/ui/section-header/section-header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CategoryCardComponent, MetricTileComponent, ProductCardComponent, SectionHeaderComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomePage {
  private readonly catalog = inject(CatalogDataService);

  readonly featuredCategories = this.catalog.getCategories();
  readonly featuredProducts = this.catalog.getFeaturedProducts();
  readonly metrics = [
    { label: 'Marketplace brands', value: '2.4K', note: 'Curated sellers and direct inventory' },
    { label: 'Orders processed', value: '14.8M', note: 'High-volume commerce operations' },
    { label: 'Customer rating', value: '4.9/5', note: 'Designed for retention and trust' },
  ];
}

