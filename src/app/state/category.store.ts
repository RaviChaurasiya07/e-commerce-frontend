import { Injectable, signal } from '@angular/core';
import { CatalogDataService } from '../shared/services/catalog-data.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryStore {
  readonly categories = signal(this.catalog.getCategories());

  constructor(private readonly catalog: CatalogDataService) {}
}

