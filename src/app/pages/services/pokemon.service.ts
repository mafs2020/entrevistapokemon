import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { IPokemon, IPokemonResponse } from '../interfaces/interfaces';
import { environment } from '../.././../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getAllPokemos(offset = 0 ): Observable<IPokemonResponse>{
    // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png
    const urlD = `${environment.url}/?offset=${offset}&limit=20`;
    return this.http.get<IPokemonResponse>(urlD).pipe(
      map(resp => {
        const arrayPokemon = resp.results.map((pokemon: any) => {
          const id = pokemon.url.split('/')[6];
          const urlImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
          const pokemonImg: IPokemon = { id, name: pokemon.name, img: urlImg };
          return pokemonImg;
        });
        return {...resp, results: arrayPokemon };
      }
    ));
  }
}
