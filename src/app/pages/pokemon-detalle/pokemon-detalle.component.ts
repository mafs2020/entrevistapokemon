import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { IPokemon, IPokemonDetalle } from '../interfaces/interfaces';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detalle',
  templateUrl: './pokemon-detalle.component.html',
  styleUrls: ['./pokemon-detalle.component.scss']
})
export class PokemonDetalleComponent implements OnInit {
  pokemon$: Observable<IPokemonDetalle>;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pokemonServices: PokemonService
  ) { }

  ngOnInit(): void {
    this.getPokemonDetail();
  }

  getPokemonDetail(): void {
    this.pokemon$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = +(params.get('id'));
        const urlImg = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
        return this.pokemonServices.getOnlyOne(id)
        .pipe(
          tap(pokemon => {
            pokemon.img = urlImg;
          }),
          catchError(err => {
            if(!id){
              this.router.navigate(['/']);
            }
            return ([]);
          })
        );
      }),
    );
  }

  // errorImage(): void {
  //   this.pokemon.img = 'assets/img/no-image.png';
  // }

}
