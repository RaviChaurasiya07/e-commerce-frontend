import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserStore {
  private readonly nameState = signal('Guest User');
  private readonly emailState = signal('');

  readonly name = this.nameState.asReadonly();
  readonly email = this.emailState.asReadonly();
  readonly initials = computed(() => this.nameState().split(' ').map((part) => part[0] ?? '').join('').slice(0, 2));
}

