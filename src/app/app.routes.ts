import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layouts/storefront-layout.component').then((m) => m.StorefrontLayoutComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./features/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'home',
        pathMatch: 'full',
        redirectTo: '',
      },
      {
        path: 'products',
        loadComponent: () => import('./features/products/product-listing.page').then((m) => m.ProductListingPage),
      },
      {
        path: 'products/:slug',
        loadComponent: () => import('./features/products/product-detail.page').then((m) => m.ProductDetailPage),
      },
      {
        path: 'search',
        loadComponent: () => import('./features/search/search.page').then((m) => m.SearchPage),
      },
      {
        path: 'cart',
        loadComponent: () => import('./features/cart/cart.page').then((m) => m.CartPage),
      },
      {
        path: 'checkout',
        loadComponent: () => import('./features/checkout/checkout.page').then((m) => m.CheckoutPage),
      },
      {
        path: 'auth',
        loadComponent: () => import('./features/auth/auth.page').then((m) => m.AuthPage),
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard.page').then((m) => m.DashboardPage),
        data: {
          title: 'Customer Dashboard',
          subtitle: 'A single control surface for account activity, orders, addresses, and preferences.',
        },
      },
      {
        path: 'vendor',
        loadComponent: () => import('./features/dashboard/dashboard.page').then((m) => m.DashboardPage),
        data: {
          title: 'Vendor Dashboard',
          subtitle: 'Monitor product availability, fulfillment, and sell-through.',
          variant: 'vendor',
        },
      },
      {
        path: 'admin',
        loadComponent: () => import('./features/dashboard/dashboard.page').then((m) => m.DashboardPage),
        data: {
          title: 'Admin Dashboard',
          subtitle: 'Operational oversight for catalog governance, users, orders, and CMS.',
          variant: 'admin',
        },
      },
      {
        path: 'categories',
        loadComponent: () => import('./features/static/static.page').then((m) => m.StaticPage),
        data: {
          title: 'Categories',
          subtitle: 'Curated category architecture for browsing at scale.',
          ctaLabel: 'Shop categories',
          ctaPath: '/products',
        },
      },
      {
        path: 'brands',
        loadComponent: () => import('./features/static/static.page').then((m) => m.StaticPage),
        data: {
          title: 'Brands',
          subtitle: 'Brand landing pages with deep merchandising and storytelling.',
          ctaLabel: 'Browse brands',
          ctaPath: '/products',
        },
      },
      {
        path: 'deals',
        loadComponent: () => import('./features/static/static.page').then((m) => m.StaticPage),
        data: {
          title: 'Deals',
          subtitle: 'Flash sale and deal-of-the-day layouts are ready to plug in.',
        },
      },
      {
        path: 'offers',
        loadComponent: () => import('./features/static/static.page').then((m) => m.StaticPage),
        data: {
          title: 'Offers',
          subtitle: 'Coupon, promotion, and loyalty surfaces can be attached here.',
        },
      },
      {
        path: 'about-us',
        loadComponent: () => import('./features/static/static.page').then((m) => m.StaticPage),
        data: {
          title: 'About Us',
          subtitle: 'Mission, trust, logistics, and brand story content.',
        },
      },
      {
        path: 'contact-us',
        loadComponent: () => import('./features/static/static.page').then((m) => m.StaticPage),
        data: {
          title: 'Contact Us',
          subtitle: 'Support, chat, and account assistance channels.',
        },
      },
      {
        path: 'faq',
        loadComponent: () => import('./features/static/static.page').then((m) => m.StaticPage),
        data: {
          title: 'FAQ',
          subtitle: 'Answers for shipping, returns, payments, and orders.',
        },
      },
      {
        path: 'terms',
        loadComponent: () => import('./features/static/static.page').then((m) => m.StaticPage),
        data: {
          title: 'Terms',
          subtitle: 'Terms of service, commerce rules, and policy content.',
        },
      },
      {
        path: 'privacy',
        loadComponent: () => import('./features/static/static.page').then((m) => m.StaticPage),
        data: {
          title: 'Privacy',
          subtitle: 'Privacy policy and data handling disclosures.',
        },
      },
      {
        path: 'wishlist',
        loadComponent: () => import('./features/static/static.page').then((m) => m.StaticPage),
        data: {
          title: 'Wishlist',
          subtitle: 'Saved items and notification-driven buying intent.',
          ctaLabel: 'Browse products',
          ctaPath: '/products',
        },
      },
      {
        path: 'profile',
        loadComponent: () => import('./features/static/static.page').then((m) => m.StaticPage),
        data: {
          title: 'Profile',
          subtitle: 'Customer account settings and identity management.',
        },
      },
      {
        path: 'address-book',
        loadComponent: () => import('./features/static/static.page').then((m) => m.StaticPage),
        data: {
          title: 'Address Book',
          subtitle: 'Shipping and billing address management.',
        },
      },
      {
        path: 'notifications',
        loadComponent: () => import('./features/static/static.page').then((m) => m.StaticPage),
        data: {
          title: 'Notifications',
          subtitle: 'Transactional, promotional, and order updates.',
        },
      },
      {
        path: 'settings',
        loadComponent: () => import('./features/static/static.page').then((m) => m.StaticPage),
        data: {
          title: 'Settings',
          subtitle: 'Account, security, and notification preferences.',
        },
      },
      {
        path: 'order-history',
        loadComponent: () => import('./features/static/static.page').then((m) => m.StaticPage),
        data: {
          title: 'Order History',
          subtitle: 'Past orders, invoices, and reorder actions.',
        },
      },
      {
        path: 'order-details',
        loadComponent: () => import('./features/static/static.page').then((m) => m.StaticPage),
        data: {
          title: 'Order Details',
          subtitle: 'Tracking, payment, returns, and shipment details.',
        },
      },
      {
        path: 'payment',
        loadComponent: () => import('./features/static/static.page').then((m) => m.StaticPage),
        data: {
          title: 'Payment',
          subtitle: 'Saved cards, wallets, and payment method selection.',
        },
      },
      {
        path: 'order-success',
        loadComponent: () => import('./features/static/static.page').then((m) => m.StaticPage),
        data: {
          title: 'Order Success',
          subtitle: 'Post-purchase confirmation and cross-sell surfaces.',
        },
      },
      {
        path: 'order-failure',
        loadComponent: () => import('./features/static/static.page').then((m) => m.StaticPage),
        data: {
          title: 'Order Failure',
          subtitle: 'Recovery, retry, and support paths after payment issues.',
        },
      },
      {
        path: 'vendor/products',
        loadComponent: () => import('./features/static/static.page').then((m) => m.StaticPage),
        data: {
          title: 'Product Management',
          subtitle: 'Catalog editing, drafts, and publishing controls.',
        },
      },
      {
        path: 'vendor/inventory',
        loadComponent: () => import('./features/static/static.page').then((m) => m.StaticPage),
        data: {
          title: 'Inventory',
          subtitle: 'Stock positions, replenishment, and low-stock alerts.',
        },
      },
      {
        path: 'vendor/sales-analytics',
        loadComponent: () => import('./features/static/static.page').then((m) => m.StaticPage),
        data: {
          title: 'Sales Analytics',
          subtitle: 'Trend and cohort reporting for vendor decisions.',
        },
      },
      {
        path: 'vendor/orders',
        loadComponent: () => import('./features/static/static.page').then((m) => m.StaticPage),
        data: {
          title: 'Vendor Orders',
          subtitle: 'Fulfillment queues, returns, and shipment tools.',
        },
      },
      {
        path: 'admin/users',
        loadComponent: () => import('./features/static/static.page').then((m) => m.StaticPage),
        data: {
          title: 'Users',
          subtitle: 'Customer, vendor, and staff account administration.',
        },
      },
      {
        path: 'admin/products',
        loadComponent: () => import('./features/static/static.page').then((m) => m.StaticPage),
        data: {
          title: 'Products',
          subtitle: 'Catalog governance and merchandising control.',
        },
      },
      {
        path: 'admin/categories',
        loadComponent: () => import('./features/static/static.page').then((m) => m.StaticPage),
        data: {
          title: 'Categories',
          subtitle: 'Navigation taxonomy and category merchandising rules.',
        },
      },
      {
        path: 'admin/orders',
        loadComponent: () => import('./features/static/static.page').then((m) => m.StaticPage),
        data: {
          title: 'Orders',
          subtitle: 'Fulfillment, support, and exception handling.',
        },
      },
      {
        path: 'admin/coupons',
        loadComponent: () => import('./features/static/static.page').then((m) => m.StaticPage),
        data: {
          title: 'Coupons',
          subtitle: 'Promotion management and eligibility controls.',
        },
      },
      {
        path: 'admin/vendors',
        loadComponent: () => import('./features/static/static.page').then((m) => m.StaticPage),
        data: {
          title: 'Vendors',
          subtitle: 'Vendor onboarding and marketplace operations.',
        },
      },
      {
        path: 'admin/cms',
        loadComponent: () => import('./features/static/static.page').then((m) => m.StaticPage),
        data: {
          title: 'CMS',
          subtitle: 'Content blocks, banners, and editorial surfaces.',
        },
      },
      {
        path: ':slug',
        loadComponent: () => import('./features/static/static.page').then((m) => m.StaticPage),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
