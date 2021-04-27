import { Component, OnDestroy, OnInit } from '@angular/core';

import { SwPush } from '@angular/service-worker';

import { catchError } from 'rxjs/operators';

import { ToastrService } from 'ngx-toastr';

import { PokemonService } from './pages/services/pokemon.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'entrevitaPokemon';
  constructor(
    readonly swPush: SwPush,
    private pokemonServices: PokemonService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.subscribeToPush();
  }

  async subscribeToPush() {

    if( this.swPush.isEnabled ){
      try {
        const { endpoint } = await this.swPush.requestSubscription({
          // eslint-disable-next-line @typescript-eslint/quotes
          serverPublicKey: "BD25VIEh-70Er4eyXgi_XgqlOK9ExYd7-MNocVn4ZWVFRSl5koKERdnDlVOCuQ0C4TtcmCODwDzbagRchdgY9U4",
        });
        this.pokemonServices.enviarNotificacion(endpoint).pipe(catchError(err => {
          this.toastr.error('ocurrio un error al guardar notificacion', 'Notificacion');
          return of([]);
        })).subscribe();
      } catch (err) {
        console.error('Could not subscribe due to:', err);
      }
    }

  }

//   subscribeToNotifications() {

//     this.swPush.requestSubscription({
//         serverPublicKey: this.VAPID_PUBLIC_KEY
//     })
//     .then(sub => this.newsletterService.addPushSubscriber(sub).subscribe())
//     .catch(err => console.error("Could not subscribe to notifications", err));
// }



// {
//   "endpoint": "https://fcm.googleapis.com/fcm/send/cbx2QC6AGbY:APA91bEjTzUxaBU7j-YN7
// ReiXV-MD-bmk2pGsp9ZVq4Jj0yuBOhFRrUS9pjz5FMnIvUenVqNpALTh5Hng7HRQpcUNQMFblTLTF7aw-yu1dGqhBOJ-U3IBfnw3hz9hq-TJ4K5f9fHLvjY",
//   "expirationTime": null,
//   "keys": {
//     "p256dh": "BOXYnlKnMkzlMc6xlIjD8OmqVh-YqswZdut2M7zoAspl1UkFeQgSLYZ7eKqKcx6xMsGK7aAguQbcG9FMmlDrDIA=",
//     "auth": "if-YFywyb4g-bFB1hO9WMw=="
//   }
// }

  ngOnDestroy(): void {
    this.swPush.unsubscribe();
  }
}


// this.swUpdate.available.subscribe(event => {

//   console.log('[App] Update available: current version is', event.current, 'available version is', event.available);
//   let snackBarRef = this.snackBar.open('Newer version of the app is available', 'Refresh');

//   snackBarRef.onAction().subscribe(() => {
//     this.winRef.nativeWindow.location.reload()
//   });

// });
