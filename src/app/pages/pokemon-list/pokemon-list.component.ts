/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';

import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { PokemonService } from '../services/pokemon.service';

import { IPokemon } from '../interfaces/interfaces';
import { ToasterService } from 'angular2-toaster';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemones: IPokemon[] = [];
  offset: number = 0;

  constructor(private pokemonServices: PokemonService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getPokemon();
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  getPokemon(): void {
    this.pokemonServices.getAllPokemos()
    .pipe(
      tap(({results}) => this.obtenerPokemonsCorrectos(results)),
      catchError(error => {
        // TODO: Add toast
        console.log();
        return of(error);
      })
    )
    .subscribe();
  }

  // todo verificar el next
  siguiente(): void {
    const offset = 20 * ++this.offset;
    this.pokemonServices.getAllPokemos(offset)
    .pipe(tap(({ results }) => this.obtenerPokemonsCorrectos(results))).subscribe();
  }

  // todo verificar el next
  regresar(): void {
    this.offset = --this.offset;
    if(this.offset <= 0){
      return;
    }
    const offset = 20 * this.offset;
    this.pokemonServices.getAllPokemos(offset).pipe(
      tap(({results}) => this.obtenerPokemonsCorrectos(results)),
      catchError(error => {
        // TODO: Add toast
        console.log();
        return of(error);
      })).subscribe();
  }

  // se agrega la imagen
  obtenerPokemonsCorrectos(results: any): void {
    this.pokemones = results.map((pokemon: any) => {
      const id = pokemon.url.split('/')[6];
      // console.log('id :>> ', id);
      // const urlImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
      const urlImg = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
      const pokemonImg: IPokemon = { id, name: pokemon.name, img: urlImg };
      return pokemonImg;
    });

  }

}
