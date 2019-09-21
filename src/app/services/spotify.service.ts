import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// operador map (filtrar información) de reactive extensions.
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'  // Si dejamos esto, no es necesario modificar modules.ts para añadir el Service en los providers.
})

export class SpotifyService {

 
  constructor( private http: HttpClient) { 
    console.log('Servicio listo!');
  }

  getNewReleases(){
    const headers = new HttpHeaders({

      Authorization: 'Bearer BQB8xoZ1taOOZSWjBuX6H6QytFXp1WbDA5bK44XWNQnJ_FWbSKXcA1d6f-DC-S9BonXsnewzWtHBt_82-Dk'
    
    });
    // Devuelve un observable
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=10', { headers } )  // Opciones entre {}
      .pipe( map( data => { return data['albums'].items}) ); // Otra forma de buscar una propiedad, en lugar de indicar que data es de tipo 'any'
    // .subscribe( data => { console.log( data ); } );
  }

  getArtist( termino: string ) {
    const headers = new HttpHeaders({

      Authorization: 'Bearer BQB8xoZ1taOOZSWjBuX6H6QytFXp1WbDA5bK44XWNQnJ_FWbSKXcA1d6f-DC-S9BonXsnewzWtHBt_82-Dk'
    
    });

    return this.http.get('https://api.spotify.com/v1/search?q=' + termino + '&type=artist&limit=10', { headers } );
  }
}
