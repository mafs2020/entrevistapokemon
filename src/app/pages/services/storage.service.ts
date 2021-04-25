import { Injectable } from '@angular/core';
import { IStorage } from '../interfaces/IStorage';

type ValidStorage = 'pokemon' | 'user';

@Injectable({
  providedIn: 'root'
})
export class StorageService implements IStorage {

  constructor() { }

  get<T>(key: ValidStorage): T {
    const data = JSON.parse(localStorage.getItem(key));
    return data;
  }

  add(data: ValidStorage): void {
    throw new Error('Method not implemented.');
  }

  delete(key: ValidStorage): void {
    throw new Error('Method not implemented.');
  }
}
