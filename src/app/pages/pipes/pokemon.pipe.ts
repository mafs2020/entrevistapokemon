import { Pipe, PipeTransform } from '@angular/core';
import { of } from 'rxjs';
import { timeout } from 'rxjs/operators';

@Pipe({
  name: 'pokemon'
})
export class PokemonPipe implements PipeTransform {

  transform(value: string): string {
    // console.log(value);
    if(!value){
      return 'assets/img/no-image.png';
    }
    return value;
  }
}
