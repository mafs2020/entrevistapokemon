import { Component, Input, OnInit } from '@angular/core';
import { IPokemon } from '../interfaces/interfaces';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  @Input()pokemon: IPokemon;
  constructor() { }

  ngOnInit(): void {}

  errorImage(): void {
    this.pokemon.img = 'assets/img/no-image.png';
  }

}
