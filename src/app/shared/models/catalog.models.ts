export interface NavigationLink {
  label: string;
  path: string;
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  productCount: number;
  accent: string;
}

export interface ProductVariant {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  stock: 'in-stock' | 'low-stock' | 'out-of-stock';
  badge?: string;
  image: string;
  summary: string;
  variants: ProductVariant[];
}

export interface MetricTile {
  label: string;
  value: string;
  note: string;
}

export interface PageContent {
  title: string;
  subtitle: string;
  eyebrow?: string;
  ctaLabel?: string;
  ctaPath?: string;
  metrics?: MetricTile[];
}

