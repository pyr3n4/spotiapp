import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';

// Array de rutas de la app, con componentes asociados que se mostrarán en la app
export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'artista', component: ArtistaComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' }, // Cualquier path
    { path: '**', pathMatch: 'full', redirectTo: 'home' } // Cualquier otro path
];
