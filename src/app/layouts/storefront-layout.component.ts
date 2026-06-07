import { CurrencyPipe } from '@angular/common';
import { Component, HostListener, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CatalogDataService } from '../shared/services/catalog-data.service';
import { CartStore } from '../state/cart.store';
import { WishlistStore } from '../state/wishlist.store';

interface FooterLink {
  label: string;
  path: string;
}

@Component({
  selector: 'app-storefront-layout',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CurrencyPipe],
  templateUrl: './storefront-layout.component.html',
  styleUrl: './storefront-layout.component.scss',
})
export class StorefrontLayoutComponent {
  private readonly catalogData = inject(CatalogDataService);
  readonly cartStore = inject(CartStore);
  readonly wishlistStore = inject(WishlistStore);
  readonly menuOpen = signal(false);
  readonly cartOpen = signal(false);
  readonly scrolled = signal(false);
  readonly navigation = this.catalogData.getNavigation();
  readonly categories = this.catalogData.getCategories();
  readonly featuredProducts = this.catalogData.getFeaturedProducts().slice(0, 3);

  readonly footerGroups = [
    {
      title: 'Shop',
      links: [
        { label: 'All products', path: '/products' },
        { label: 'Categories', path: '/categories' },
        { label: 'Deals', path: '/deals' },
        { label: 'Wishlist', path: '/wishlist' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About us', path: '/about-us' },
        { label: 'Contact us', path: '/contact-us' },
        { label: 'FAQ', path: '/faq' },
        { label: 'Careers', path: '/about-us' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Shipping', path: '/terms' },
        { label: 'Returns', path: '/privacy' },
        { label: 'Payment', path: '/payment' },
        { label: 'Order history', path: '/order-history' },
      ],
    },
  ] satisfies { title: string; links: FooterLink[] }[];

  readonly footerCategories = this.categories.slice(0, 6);
  readonly supportLinks = [
    { label: 'Privacy policy', path: '/privacy' },
    { label: 'Terms of service', path: '/terms' },
    { label: 'Vendor portal', path: '/vendor' },
    { label: 'Admin console', path: '/admin' },
  ];

  readonly cartSummary = computed(() => ({
    count: this.cartStore.itemCount(),
    subtotal: this.cartStore.subtotal(),
  }));

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.scrolled.set(window.scrollY > 16);
  }

  toggleMenu(): void {
    this.menuOpen.update((value) => !value);
  }

  toggleCart(): void {
    this.cartOpen.update((value) => !value);
  }

  closeOverlays(): void {
    this.menuOpen.set(false);
    this.cartOpen.set(false);
  }

  removeFromCart(productId: string): void {
    this.cartStore.remove(productId);
  }
}
