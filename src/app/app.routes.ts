import { RouterModule, Routes } from '@angular/router';

const rutas: Routes = [
    { path: '', loadChildren: async () => (await import('./pages/pages.module')).PagesModule },
    // { path: '**', redirectTo: '/inicio' }
];


export const rutasPadreModule = RouterModule.forRoot(rutas);


// const routes: Routes = [
//     { path: 'first-component', component: FirstComponent },
//     { path: 'second-component', component: SecondComponent },
//     { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
//     { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
//   ];
