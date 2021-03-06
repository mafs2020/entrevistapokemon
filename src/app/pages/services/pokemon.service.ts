/* eslint-disable @typescript-eslint/member-ordering */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { IPokemon, IPokemonDetalle, IPokemonResponse } from '../interfaces/interfaces';
import { environment } from '../.././../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemonesLocal: IPokemon[] = [];

  constructor(private http: HttpClient) { }

  getAllPokemos(offset = 0): Observable<IPokemonResponse> {
    // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png
    const urlD = `${environment.url}/?offset=${offset}&limit=20`;
    return this.http.get<IPokemonResponse>(urlD);
  }

  favoritos(pokemon: IPokemon) {
    this.pokemonesLocal.push(pokemon);
    const pokemons: IPokemon[] =
      JSON.parse(localStorage.getItem('pokemon')) || [];

    if (pokemons.length) {
      this.pokemonesLocal = [...pokemons, pokemon];
    }
    localStorage.setItem('pokemon', JSON.stringify(this.pokemonesLocal));
  }

  getOnlyOne(id: number): Observable<IPokemonDetalle>{
    return this.http.get<IPokemonDetalle>(`${environment.url}/${id}`);
  }

  enviarNotificacion(data: PushSubscription): Observable<any> {
    return this.http.post<Observable<any>>(environment.server, {data});
  }
}
