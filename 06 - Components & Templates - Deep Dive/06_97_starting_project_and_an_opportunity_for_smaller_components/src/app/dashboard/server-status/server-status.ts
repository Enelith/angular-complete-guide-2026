import { Component, DestroyRef, inject, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.scss',
})
export class ServerStatus {
  // We're going to disable the inference of TypeScript (from which it assumes 'currentStatus' is of type String) by explicitly assigning a type
  // Setting specific string values as types uses a TypeScript feature called "Literal Types".
  // The idea is to only allow specific (string) values - instead of all strings.
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  private destroyRef = inject(DestroyRef);

  constructor() {
    // Every 5s, the function will be executed.
    const interval = setInterval(() => {
      const rdm = Math.random(); // 0 -> 1 (excluded, so... 0,99999)

      if (rdm < 0.5) {
        this.currentStatus.set('online');
      } else if (rdm < 0.8) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }
}
