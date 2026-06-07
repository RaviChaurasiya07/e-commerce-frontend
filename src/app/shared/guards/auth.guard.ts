import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthStore } from '../../state/auth.store';

export const authGuard: CanActivateFn = () => inject(AuthStore).isAuthenticated();

