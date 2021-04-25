import { Injectable } from '@angular/core';
import { IPokemon } from '../interfaces/interfaces';
import { IStorage } from '../interfaces/IStorage';

type ValidStorage = 'pokemon';

@Injectable({
  providedIn: 'root'
})
export class StorageService implements IStorage {
  pokemonesLocal: IPokemon[] = [];
  constructor() { }

  get<T>(key: ValidStorage): T {
    return JSON.parse(localStorage.getItem(key));
  }

  add(pokemon: IPokemon): void {
    this.pokemonesLocal.push(pokemon);
    const pokemons: IPokemon[] =
      JSON.parse(localStorage.getItem('pokemon')) || [];

    if (pokemons.length) {
      this.pokemonesLocal = [...pokemons, pokemon];
    }
    localStorage.setItem('pokemon', JSON.stringify(this.pokemonesLocal));
  }

  delete(id: number): void {
    const arrayPokemons: IPokemon[] = JSON.parse(localStorage.getItem('pokemon'));
    // eslint-disable-next-line eqeqeq
    const newarrayPokemons = arrayPokemons.filter(pokemon => pokemon.id != id);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    localStorage.setItem('pokemon', JSON.stringify(newarrayPokemons));

  }

  deleteAll(key: ValidStorage): void {
    localStorage.removeItem(key);
  }
}
