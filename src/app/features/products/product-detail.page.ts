import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { CatalogDataService } from '../../shared/services/catalog-data.service';
import { ProductCardComponent } from '../../shared/ui/product-card/product-card.component';
import { SectionHeaderComponent } from '../../shared/ui/section-header/section-header.component';
import { CartStore } from '../../state/cart.store';
import { Product } from '../../shared/models/catalog.models';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [RouterLink, CurrencyPipe, ProductCardComponent, SectionHeaderComponent],
  templateUrl: './product-detail.page.html',
  styleUrl: './product-detail.page.scss',
})
export class ProductDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly catalog = inject(CatalogDataService);
  private readonly cartStore = inject(CartStore);

  readonly product: Product | undefined = this.catalog.getProductBySlug(this.route.snapshot.paramMap.get('slug') ?? '');
  readonly relatedProducts = this.catalog.getFeaturedProducts().filter((item) => item.slug !== this.product?.slug);

  addToCart(): void {
    if (this.product) {
      this.cartStore.add(this.product);
    }
  }
}

