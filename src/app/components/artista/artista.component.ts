import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artista: any = {};
  loadingArtista: boolean;

  constructor( private router: ActivatedRoute, 
               private spotify: SpotifyService) { 
                this.loadingArtista = true;
    // Suscripción a cualquier cambio de los parámetros en la URL
    this.router.params.subscribe( params =>{
      this.getArtista( params[ 'id' ]); //Llamada al método para obtener el artista de ID en cuestión
    });
  }

  getArtista( id: string){
    //this.loadingArtista = true;
    this.spotify.getArtist( id )
        .subscribe( artista => {
          console.log( 'datos: ', artista );
          this.artista = artista;
          this.loadingArtista = false;
    });

  }

}
