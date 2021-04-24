/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { IPokemon } from './interfaces/interfaces';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemones: IPokemon[] = [];
  offset: number = 0;
  constructor(private pokemonServices: PokemonService) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void {
    this.pokemonServices.getAllPokemos().subscribe(data => {
      this.pokemones = data;
      console.log(data);
    });
  }

  siguiente(): void {
    const offset = 20 * ++this.offset;
    this.pokemonServices.getAllPokemos(offset).subscribe(data => console.log(data));
  }
}
