import { Component, computed, inject, input } from '@angular/core';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../../models/catalog.models';
import { CartStore } from '../../../state/cart.store';
import { WishlistStore } from '../../../state/wishlist.store';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink, CurrencyPipe, DecimalPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  readonly product = input.required<Product>();
  private readonly cartStore = inject(CartStore);
  private readonly wishlistStore = inject(WishlistStore);

  readonly isWishlisted = computed(() =>
    this.wishlistStore.items().some((item) => item.id === this.product().id),
  );

  addToCart(): void {
    if (this.product().stock !== 'out-of-stock') {
      this.cartStore.add(this.product());
    }
  }

  toggleWishlist(): void {
    this.wishlistStore.toggle(this.product());
  }
}
