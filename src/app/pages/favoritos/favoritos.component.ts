import { Component, OnDestroy, OnInit } from '@angular/core';

import { PokemonService } from '../services/pokemon.service';

import { IPokemon } from '../interfaces/interfaces';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit, OnDestroy {
  pokemones: IPokemon[] = [];
  constructor(private pokemonServices: PokemonService, private storageService: StorageService) { }

  ngOnInit(): void {
    this.favoritosPokemones();
  }

  favoritosPokemones(){
    this.pokemones = this.storageService.get('pokemon') || [];
    console.log(this.pokemones);
    // console.log(this.pokemones);
  }

  recibe(pokemon: IPokemon){
    console.log( pokemon );
    this.pokemones = this.pokemones.filter(p => p.id !== pokemon.id);
  }

  ngOnDestroy(): void {
    this.pokemones = [];
  }

}
