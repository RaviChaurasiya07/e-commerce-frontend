import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthStore } from '../../state/auth.store';

export const roleGuard = (roles: Array<'customer' | 'vendor' | 'admin'>): CanActivateFn => () => roles.includes(inject(AuthStore).role());

