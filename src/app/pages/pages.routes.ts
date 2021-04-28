import { RouterModule, Routes } from '@angular/router';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { InicioComponent } from './inicio/inicio.component';
import { PokemonDetalleComponent } from './pokemon-detalle/pokemon-detalle.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

const rutas: Routes = [
    {
        path: '',
        component: InicioComponent,
        children: [
            { path: '', component: PokemonListComponent },
            { path: 'favoritos', component: FavoritosComponent },
            { path: 'detalle/:id', component: PokemonDetalleComponent }
        ]
    }
];

export const rutasPageModule = RouterModule.forChild(rutas);
