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
  topTracks: any[] = [];

  constructor( private router: ActivatedRoute, 
               private spotify: SpotifyService) { 
                this.loadingArtista = true;
    // Suscripción a cualquier cambio de los parámetros en la URL
    this.router.params.subscribe( params =>{
      this.getArtista( params[ 'id' ]); //Llamada al método para obtener el artista de ID en cuestión
      this.getTopTracks( params[ 'id' ]); //Obtener sus temas top
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

  getTopTracks( id: string ){
      this.spotify.getTopTracks( id )
      .subscribe( (topTracks: any) => {
          console.log( 'top tracks: ' , topTracks );
          this.topTracks = topTracks.tracks;
          console.log( 'album: ', topTracks.tracks[0].album.name);
          console.log( 'canción: ', topTracks.tracks[0].name);

        });

  }

}
