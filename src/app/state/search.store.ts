import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchStore {
  private readonly queryState = signal('');
  private readonly historyState = signal<string[]>(['trail runners', 'linen shirt', 'air fryer']);

  readonly query = this.queryState.asReadonly();
  readonly history = this.historyState.asReadonly();
  readonly suggestions = computed(() => {
    const query = this.queryState().trim().toLowerCase();
    const source = ['boots', 'hoodie', 'jacket', 'sneakers', 'dress', 'watch', 'speaker', 'backpack'];
    return query ? source.filter((item) => item.includes(query)).slice(0, 5) : source.slice(0, 5);
  });

  setQuery(query: string): void {
    this.queryState.set(query);
  }

  commit(query: string): void {
    const normalized = query.trim();
    if (!normalized) {
      return;
    }

    this.queryState.set(normalized);
    this.historyState.update((items) => [normalized, ...items.filter((item) => item !== normalized)].slice(0, 6));
  }
}

