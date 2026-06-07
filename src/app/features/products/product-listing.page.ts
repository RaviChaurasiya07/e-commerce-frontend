import { Component, computed, inject, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from '../../shared/ui/product-card/product-card.component';
import { SectionHeaderComponent } from '../../shared/ui/section-header/section-header.component';
import { EmptyStateComponent } from '../../shared/ui/empty-state/empty-state.component';
import { CatalogDataService } from '../../shared/services/catalog-data.service';

@Component({
  selector: 'app-product-listing-page',
  standalone: true,
  imports: [DecimalPipe, RouterLink, EmptyStateComponent, ProductCardComponent, SectionHeaderComponent],
  templateUrl: './product-listing.page.html',
  styleUrl: './product-listing.page.scss',
})
export class ProductListingPage {
  private readonly catalog = inject(CatalogDataService);
  readonly query = signal('');
  readonly products = this.catalog.getProducts();
  readonly visibleProducts = computed(() => {
    const search = this.query().trim().toLowerCase();
    return search ? this.products.filter((product) => product.name.toLowerCase().includes(search)) : this.products;
  });
}
