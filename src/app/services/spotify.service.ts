import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'  // Si dejamos esto, no es necesario modificar modules.ts para añadir el Service en los providers.
})

export class SpotifyService {

  constructor( private http: HttpClient) { 
    console.log('Servicio listo!');
  }

  getNewReleases(){
    const headers = new HttpHeaders({

      Authorization: 'Bearer BQA81LA9eLPStOGzVJhzIwKfMXyLk_gQsqBs9TueD7qZzkZzvA6wYSeTQd7OSIMsy8zJgTFTBebthr5URCA'
    
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=10', { headers } );  // Opciones entre {}
    // .subscribe( data => { console.log( data ); } );
  }
}
