import { Component, computed, inject, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CatalogDataService } from '../shared/services/catalog-data.service';
import { CartStore } from '../state/cart.store';

@Component({
  selector: 'app-storefront-layout',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CurrencyPipe],
  templateUrl: './storefront-layout.component.html',
  styleUrl: './storefront-layout.component.scss',
})
export class StorefrontLayoutComponent {
  private readonly catalogData = inject(CatalogDataService);
  readonly cartStore = inject(CartStore);
  readonly menuOpen = signal(false);
  readonly cartOpen = signal(false);
  readonly navigation = this.catalogData.getNavigation();

  readonly cartSummary = computed(() => ({
    count: this.cartStore.itemCount(),
    subtotal: this.cartStore.subtotal(),
  }));

  toggleMenu(): void {
    this.menuOpen.update((value) => !value);
  }

  toggleCart(): void {
    this.cartOpen.update((value) => !value);
  }

  closeOverlays(): void {
    this.menuOpen.set(false);
    this.cartOpen.set(false);
  }
}

