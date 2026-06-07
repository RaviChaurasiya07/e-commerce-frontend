import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthStore {
  private readonly tokenState = signal<string | null>(null);
  private readonly roleState = signal<'customer' | 'vendor' | 'admin'>('customer');

  readonly token = this.tokenState.asReadonly();
  readonly role = this.roleState.asReadonly();
  readonly isAuthenticated = computed(() => Boolean(this.tokenState()));

  setSession(token: string, role: 'customer' | 'vendor' | 'admin'): void {
    this.tokenState.set(token);
    this.roleState.set(role);
  }

  clearSession(): void {
    this.tokenState.set(null);
    this.roleState.set('customer');
  }
}

