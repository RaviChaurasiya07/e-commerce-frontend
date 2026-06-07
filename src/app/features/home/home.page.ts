import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CatalogDataService } from '../../shared/services/catalog-data.service';
import { CategoryCardComponent } from '../../shared/ui/category-card/category-card.component';
import { MetricTileComponent } from '../../shared/ui/metric-tile/metric-tile.component';
import { ProductCardComponent } from '../../shared/ui/product-card/product-card.component';
import { SectionHeaderComponent } from '../../shared/ui/section-header/section-header.component';

interface PromoBanner {
  eyebrow: string;
  title: string;
  copy: string;
  ctaLabel: string;
  ctaPath: string;
  image: string;
  accent: string;
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CategoryCardComponent, MetricTileComponent, ProductCardComponent, SectionHeaderComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomePage {
  private readonly catalog = inject(CatalogDataService);

  readonly featuredCategories = this.catalog.getCategories();
  readonly featuredProducts = this.catalog.getFeaturedProducts();
  readonly bestSellers = this.featuredProducts.slice(0, 4);
  readonly newArrivals = this.featuredProducts.slice(4, 8);

  readonly heroStats = [
    { label: 'Marketplace brands', value: '2.4K', note: 'Curated sellers and direct inventory' },
    { label: 'Orders processed', value: '14.8M', note: 'High-volume commerce operations' },
    { label: 'Customer rating', value: '4.9/5', note: 'Designed for retention and trust' },
  ];

  readonly heroPills = ['New season edit', 'Fast checkout', 'Trusted sellers'];

  readonly promoBanners: PromoBanner[] = [
    {
      eyebrow: 'Drop 01',
      title: 'Tailored essentials for the modern capsule wardrobe',
      copy: 'Premium silhouettes, neutral tones, and pieces that move from work to weekend without friction.',
      ctaLabel: 'Shop outerwear',
      ctaPath: '/products',
      image:
        'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
      accent: '#0a3551',
    },
    {
      eyebrow: 'Drop 02',
      title: 'Accessories that sharpen the whole look instantly',
      copy: 'From structured carry goods to polished leather details, each piece is chosen to elevate the outfit.',
      ctaLabel: 'Browse accessories',
      ctaPath: '/products',
      image:
        'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80',
      accent: '#cf8a2b',
    },
  ];

  readonly testimonials: Testimonial[] = [
    {
      quote:
        'The storefront feels like a premium direct-to-consumer brand. Fast, clear, and genuinely polished on mobile.',
      name: 'Maya Chen',
      role: 'Digital Commerce Lead',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
    },
    {
      quote:
        'The hierarchy makes products and promotions easy to scan, while the detail pages still feel rich and confident.',
      name: 'Jordan Lee',
      role: 'E-commerce Product Manager',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    },
    {
      quote:
        'It has the right balance of luxury and utility. The visual system feels expensive without slowing the page down.',
      name: 'Alicia Gomez',
      role: 'Creative Director',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80',
    },
  ];

  readonly brandLogos = ['Aster', 'Form', 'Northline', 'Monaco', 'Luma', 'Atlas'];
  readonly newsletterHighlights = [
    'Weekly product drops',
    'Private sale access',
    'Restock and back-in-stock alerts',
  ];
}
