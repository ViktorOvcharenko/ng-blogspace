import { Injectable } from '@angular/core';

@Injectable()
export class PersistenceService {
  set(key: string, value: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.log(`Error saving to localStorage ${e}`);
    }
  }

  get(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.log(`Error getting value from localStorage ${e}`);
      return null;
    }
  }
}
