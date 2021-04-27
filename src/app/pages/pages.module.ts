import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// rutas Pages
import { rutasPageModule } from './pages.routes';

// componentes
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { InicioComponent } from './inicio/inicio.component';
// import { HeaderComponent } from './header/header.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { PokemonComponent } from './pokemon/pokemon.component';

import { PokemonPipe } from './pipes/pokemon.pipe';
import { HeaderDComponent } from './header-d/header-d.component';


@NgModule({
  declarations: [
    PokemonListComponent,
    InicioComponent,
    // HeaderComponent,
    FavoritosComponent,
    PokemonComponent,
    PokemonPipe,
    HeaderDComponent
  ],
  imports: [
    CommonModule,
    rutasPageModule
  ]
})

export class PagesModule { }
