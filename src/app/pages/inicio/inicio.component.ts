import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events
      .pipe(
        tap((event: RouterEvent) => {
          if(event instanceof NavigationEnd) {
            console.log('event instanceof NavigationEnd');
          }
        })
      ).subscribe();
  }

}
