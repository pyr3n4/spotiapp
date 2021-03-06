import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Importar el módulo de rutas
import { RouterModule } from '@angular/router';

// Importar módulo para hacer peticiones http
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

// Importar rutas (constante ROUTES, arreglo de paths)
import { ROUTES } from './app.routes';

// Servicios
import { SpotifyService } from './services/spotify.service';

// Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomseguroPipe} from './pipes/domseguro.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    DomseguroPipe,
    TarjetaComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, {useHash: true} ) // Anyadir el arreglo de paths y habilitar el uso de Hash
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
