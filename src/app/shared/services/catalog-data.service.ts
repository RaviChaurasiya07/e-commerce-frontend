import { Injectable } from '@angular/core';
import { Category, NavigationLink, Product } from '../models/catalog.models';

@Injectable({
  providedIn: 'root',
})
export class CatalogDataService {
  private readonly navigation: NavigationLink[] = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Categories', path: '/categories' },
    { label: 'Deals', path: '/deals' },
    { label: 'Wishlist', path: '/wishlist' },
  ];

  private readonly categories: Category[] = [
    { id: '1', name: 'Women', slug: 'women', productCount: 1284, accent: '#0b3b5a' },
    { id: '2', name: 'Men', slug: 'men', productCount: 1098, accent: '#1e6f9f' },
    { id: '3', name: 'Kids', slug: 'kids', productCount: 624, accent: '#d98f2b' },
    { id: '4', name: 'Beauty', slug: 'beauty', productCount: 942, accent: '#146c43' },
    { id: '5', name: 'Home', slug: 'home', productCount: 1510, accent: '#334155' },
    { id: '6', name: 'Electronics', slug: 'electronics', productCount: 1880, accent: '#7c3aed' },
  ];

  private readonly products: Product[] = [
    {
      id: 'p-001',
      name: 'Nimbus Tech Runner',
      slug: 'nimbus-tech-runner',
      brand: 'Aster',
      category: 'Men',
      price: 129,
      originalPrice: 159,
      rating: 4.8,
      reviewCount: 1820,
      stock: 'in-stock',
      badge: 'Best Seller',
      image: 'assets/shapes.svg',
      summary: 'Lightweight daily runner with energy-return foam and adaptive knit upper.',
      variants: [
        { label: 'Size', value: '7-12' },
        { label: 'Color', value: 'Black / White' },
      ],
    },
    {
      id: 'p-002',
      name: 'Atlas Carry Pack',
      slug: 'atlas-carry-pack',
      brand: 'Northline',
      category: 'Accessories',
      price: 84,
      originalPrice: 99,
      rating: 4.7,
      reviewCount: 639,
      stock: 'low-stock',
      badge: 'Trending',
      image: 'assets/shapes.svg',
      summary: 'Structured 18L commuter pack with weatherproof shell and device sleeve.',
      variants: [
        { label: 'Capacity', value: '18L' },
        { label: 'Color', value: 'Slate' },
      ],
    },
    {
      id: 'p-003',
      name: 'Studio Knit Set',
      slug: 'studio-knit-set',
      brand: 'Form',
      category: 'Women',
      price: 72,
      rating: 4.6,
      reviewCount: 410,
      stock: 'in-stock',
      badge: 'New',
      image: 'assets/shapes.svg',
      summary: 'Relaxed two-piece set engineered for travel, work, and weekend resets.',
      variants: [
        { label: 'Fit', value: 'Relaxed' },
        { label: 'Color', value: 'Oat' },
      ],
    },
  ];

  getNavigation(): NavigationLink[] {
    return this.navigation;
  }

  getCategories(): Category[] {
    return this.categories;
  }

  getProducts(): Product[] {
    return this.products;
  }

  getFeaturedProducts(): Product[] {
    return this.products;
  }

  getProductBySlug(slug: string): Product | undefined {
    return this.products.find((product) => product.slug === slug);
  }
}

