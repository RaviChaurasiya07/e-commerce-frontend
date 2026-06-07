import { Injectable } from '@angular/core';
import { Category, NavigationLink, Product } from '../models/catalog.models';

@Injectable({
  providedIn: 'root',
})
export class CatalogDataService {
  private readonly navigation: NavigationLink[] = [
    { label: 'Home', path: '/', description: 'Editorial storefront landing page' },
    { label: 'Products', path: '/products', description: 'Browse the full catalog' },
    { label: 'Categories', path: '/categories', description: 'Shop by curated verticals' },
    { label: 'Deals', path: '/deals', description: 'Featured promotions and offers' },
    { label: 'Wishlist', path: '/wishlist', description: 'Saved items and re-engagement' },
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
      image:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
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
      image:
        'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80',
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
      image:
        'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
      summary: 'Relaxed two-piece set engineered for travel, work, and weekend resets.',
      variants: [
        { label: 'Fit', value: 'Relaxed' },
        { label: 'Color', value: 'Oat' },
      ],
    },
    {
      id: 'p-004',
      name: 'Aurora Trench Coat',
      slug: 'aurora-trench-coat',
      brand: 'Form',
      category: 'Women',
      price: 168,
      originalPrice: 198,
      rating: 4.9,
      reviewCount: 965,
      stock: 'in-stock',
      badge: 'Editor Pick',
      image:
        'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
      summary: 'Tailored layering piece with a fluid drape and polished everyday structure.',
      variants: [
        { label: 'Fit', value: 'Relaxed Tailored' },
        { label: 'Color', value: 'Stone' },
      ],
    },
    {
      id: 'p-005',
      name: 'Mono Leather Mule',
      slug: 'mono-leather-mule',
      brand: 'Aster',
      category: 'Women',
      price: 118,
      rating: 4.7,
      reviewCount: 372,
      stock: 'in-stock',
      badge: 'Luxury',
      image:
        'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80',
      summary: 'Minimal slip-on silhouette with comfort cushioning and rich leather finish.',
      variants: [
        { label: 'Size', value: '5-10' },
        { label: 'Color', value: 'Espresso' },
      ],
    },
    {
      id: 'p-006',
      name: 'Lumina Desk Lamp',
      slug: 'lumina-desk-lamp',
      brand: 'Northline',
      category: 'Home',
      price: 84,
      originalPrice: 102,
      rating: 4.8,
      reviewCount: 501,
      stock: 'in-stock',
      badge: 'New',
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      summary: 'Architectural ambient lighting with warm task illumination and dim control.',
      variants: [
        { label: 'Finish', value: 'Matte White' },
        { label: 'Light', value: 'Warm LED' },
      ],
    },
    {
      id: 'p-007',
      name: 'Frame Smart Watch',
      slug: 'frame-smart-watch',
      brand: 'Aster',
      category: 'Electronics',
      price: 249,
      originalPrice: 299,
      rating: 4.9,
      reviewCount: 1240,
      stock: 'low-stock',
      badge: 'Bestseller',
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b95f1bf?auto=format&fit=crop&w=1200&q=80',
      summary: 'Sleek performance watch with health tracking and all-day battery life.',
      variants: [
        { label: 'Case', value: '42mm' },
        { label: 'Color', value: 'Graphite' },
      ],
    },
    {
      id: 'p-008',
      name: 'Elevate Skincare Set',
      slug: 'elevate-skincare-set',
      brand: 'Form',
      category: 'Beauty',
      price: 96,
      rating: 4.7,
      reviewCount: 284,
      stock: 'in-stock',
      badge: 'Fresh',
      image:
        'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
      summary: 'A premium self-care set designed for a clean ritual and elegant gifting.',
      variants: [
        { label: 'Type', value: 'Full Set' },
        { label: 'Scent', value: 'Soft Citrus' },
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
