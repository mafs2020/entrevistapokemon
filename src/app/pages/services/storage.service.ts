/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
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
    // if(!!localStorage.getItem('pokemon')){
      return JSON.parse(localStorage.getItem(key)) || [];
    // }
  }

  add(pokemon: IPokemon): void {
    const arreglo: IPokemon[] = JSON.parse( localStorage.getItem('pokemon') ) || [];
    arreglo.push(pokemon);
    localStorage.setItem('pokemon', JSON.stringify( arreglo ));
  }

  delete(id: number): void {
    console.log('id :>> ', id);
    const arrayPokemons: IPokemon[] = JSON.parse(localStorage.getItem('pokemon')) || [];
    // eslint-disable-next-line eqeqeq
    const newarrayPokemons = arrayPokemons.filter(pokemon => pokemon.id != id);
    // verificar si hay algo que guardar
    if(newarrayPokemons.length){
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      localStorage.setItem('pokemon', JSON.stringify(newarrayPokemons));
    } else {
      localStorage.setItem('pokemon', JSON.stringify([]));
    }
  }

  deleteAll(key: ValidStorage): void {
    localStorage.removeItem(key);
  }
}



// this.pokemonesLocal.push(pokemon);
// const pokemons: IPokemon[] =
//   JSON.parse(localStorage.getItem('pokemon')) || [];

// if (pokemons.length) {
//   this.pokemonesLocal = [...pokemons, pokemon];
// }
// localStorage.setItem('pokemon', JSON.stringify(this.pokemonesLocal));
