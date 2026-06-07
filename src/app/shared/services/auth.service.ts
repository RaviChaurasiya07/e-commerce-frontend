import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly tokenState = signal<string | null>(null);
  readonly token = this.tokenState.asReadonly();
  readonly isAuthenticated = signal(false);

  login(token: string): void {
    this.tokenState.set(token);
    this.isAuthenticated.set(true);
  }

  logout(): void {
    this.tokenState.set(null);
    this.isAuthenticated.set(false);
  }
}

