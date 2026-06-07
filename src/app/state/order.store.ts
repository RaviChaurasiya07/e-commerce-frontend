import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderStore {
  readonly orderIds = signal<string[]>([]);
}

