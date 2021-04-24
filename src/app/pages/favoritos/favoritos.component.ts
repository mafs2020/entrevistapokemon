import { Component, OnInit } from '@angular/core';
import { IPokemon } from '../interfaces/interfaces';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {
  pokemones: IPokemon[] = [];
  constructor(private pokemonServices: PokemonService) { }

  ngOnInit(): void {
    this.favoritosPokemones();
    // console.log('object');
  }

  favoritosPokemones(){
    this.pokemones = JSON.parse(localStorage.getItem('pokemon'));
    console.log(this.pokemones);
  }

}
