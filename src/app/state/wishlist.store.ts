import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../shared/models/catalog.models';

@Injectable({
  providedIn: 'root',
})
export class WishlistStore {
  private readonly itemsState = signal<Product[]>([]);

  readonly items = this.itemsState.asReadonly();
  readonly count = computed(() => this.itemsState().length);

  toggle(product: Product): void {
    const exists = this.itemsState().some((item) => item.id === product.id);

    if (exists) {
      this.itemsState.update((items) => items.filter((item) => item.id !== product.id));
      return;
    }

    this.itemsState.update((items) => [product, ...items]);
  }
}

