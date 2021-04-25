import { Component, Input, OnInit } from '@angular/core';
import { IPokemon } from '../interfaces/interfaces';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  @Input() pokemon: IPokemon;
  @Input() guardarInput: boolean;

  constructor(private pokemonServices: PokemonService) { }

  ngOnInit(): void {
    // this.localPokemon.img = `https://pokeres.bastionbot.org/images/pokemon/${this.localPokemon.id}.png`;
  }

  errorImage(): void {
    this.pokemon.img = 'assets/img/no-image.png';
  }

  guardar(){
    this.pokemonServices.favoritos(this.pokemon);
  }

}
