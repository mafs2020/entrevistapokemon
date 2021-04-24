import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { IPokemon, IPokemonResponse } from '../pokemon-list/interfaces/interfaces';
import { environment } from '../.././../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getAllPokemos(offset = 0 ): Observable<IPokemon[]>{
    // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png
    const urlD = `${environment.url}/?offset=${offset}&limit=20`;
    return this.http.get<IPokemonResponse>(urlD).pipe(
      map(data => data.results.map((pokemon: any) => {
        const id = pokemon.url.split('/')[6];
        const urlImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        return { id, name: pokemon.name, img: urlImg };
      }
    )));
  }
}
