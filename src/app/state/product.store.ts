import { Injectable, signal } from '@angular/core';
import { CatalogDataService } from '../shared/services/catalog-data.service';

@Injectable({
  providedIn: 'root',
})
export class ProductStore {
  readonly products = signal(this.catalog.getProducts());

  constructor(private readonly catalog: CatalogDataService) {}
}

