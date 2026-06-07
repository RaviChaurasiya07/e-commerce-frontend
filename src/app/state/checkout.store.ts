import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CheckoutStore {
  private readonly stepState = signal(1);

  readonly step = this.stepState.asReadonly();
  readonly isFinalStep = computed(() => this.stepState() === 3);

  next(): void {
    this.stepState.update((step) => Math.min(step + 1, 3));
  }

  previous(): void {
    this.stepState.update((step) => Math.max(step - 1, 1));
  }
}

