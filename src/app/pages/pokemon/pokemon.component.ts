import { Component, Input, OnInit } from '@angular/core';
import { IPokemon } from '../interfaces/interfaces';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  @Input()pokemon: IPokemon;
  constructor(private pokemonServices: PokemonService) { }

  ngOnInit(): void {}

  errorImage(): void {
    this.pokemon.img = 'assets/img/no-image.png';
  }

  agregar(){
    this.pokemonServices.favoritos(this.pokemon);
  }

  imprimir(){
    console.log('guason');
  }

}
