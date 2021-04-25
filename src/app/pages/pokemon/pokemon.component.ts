import { Component, Input, OnInit } from '@angular/core';
import { IPokemon } from '../interfaces/interfaces';
import { PokemonService } from '../services/pokemon.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  @Input() pokemon: IPokemon;
  @Input() guardarInput: boolean;
  clase: boolean;

  constructor(private pokemonServices: PokemonService,private storageService: StorageService) { }

  ngOnInit(): void {
    // this.localPokemon.img = `https://pokeres.bastionbot.org/images/pokemon/${this.localPokemon.id}.png`;
    const arrgeloPokemones: IPokemon[] = this.storageService.get('pokemon');
    this.clase = arrgeloPokemones.includes(this.pokemon);
  }

  errorImage(): void {
    this.pokemon.img = 'assets/img/no-image.png';
  }

  guardar(){
    this.pokemonServices.favoritos(this.pokemon);
  }

  eliminar(){
    this.storageService.delete(this.pokemon.id);
  }

}
