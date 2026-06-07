import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../shared/models/catalog.models';

export interface CartLineItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartStore {
  private readonly lines = signal<CartLineItem[]>([]);

  readonly items = this.lines.asReadonly();
  readonly itemCount = computed(() => this.lines().reduce((total, line) => total + line.quantity, 0));
  readonly subtotal = computed(() => this.lines().reduce((total, line) => total + line.product.price * line.quantity, 0));

  add(product: Product): void {
    const current = this.lines();
    const existing = current.find((line) => line.product.id === product.id);

    if (existing) {
      this.lines.update((items) =>
        items.map((line) => (line.product.id === product.id ? { ...line, quantity: line.quantity + 1 } : line)),
      );
      return;
    }

    this.lines.update((items) => [...items, { product, quantity: 1 }]);
  }

  remove(productId: string): void {
    this.lines.update((items) => items.filter((line) => line.product.id !== productId));
  }

  setQuantity(productId: string, quantity: number): void {
    if (quantity < 1) {
      this.remove(productId);
      return;
    }

    this.lines.update((items) => items.map((line) => (line.product.id === productId ? { ...line, quantity } : line)));
  }

  clear(): void {
    this.lines.set([]);
  }
}

