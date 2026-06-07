import { APP_INITIALIZER, Provider } from '@angular/core';

export function initializeApp(): Promise<void> {
  return Promise.resolve();
}

export const appInitializerProvider: Provider = {
  provide: APP_INITIALIZER,
  useFactory: () => initializeApp,
  multi: true,
};

