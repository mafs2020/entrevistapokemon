import { Component, OnDestroy, OnInit } from '@angular/core';

// seo
import { Meta, Title } from '@angular/platform-browser';

import { StorageService } from '../services/storage.service';

import { IPokemon } from '../interfaces/interfaces';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit, OnDestroy {
  pokemones: IPokemon[] = [];
  constructor(
    private storageService: StorageService,
    private title: Title,
    private meta: Meta
    ) { }

  ngOnInit(): void {
    this.favoritosPokemones();
  }

  favoritosPokemones(){
    this.pokemones = this.storageService.get('pokemon') || [];
    // console.log(this.pokemones);
  }

  recibe(pokemon: IPokemon){
    this.pokemones = this.pokemones.filter(p => p.id !== pokemon.id);
  }

  seo(): void {
    this.title.setTitle('Pokemones Favoritos');
    // MetaDefinition
    this.meta.addTag({name:'description', content: 'pokemones Favoritos'});
  }

  ngOnDestroy(): void {
    this.pokemones = [];
  }

}
