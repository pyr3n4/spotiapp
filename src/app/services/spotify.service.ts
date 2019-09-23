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

      Authorization: 'Bearer BQCMwCY8PXYsGU8yPsRKghvHmwRsvZiAQCLe0H1Z-eY8z5HH6wIahy6E3e5qYoEHkVu_4LZBJl2G1Fbf7AQ'
    
    });
    // Devuelve un observable
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=10', { headers } )  // Opciones entre {}
      .pipe( map( data => data['albums'].items) ); // Otra forma de buscar una propiedad, en lugar de indicar que data es de tipo 'any'
    // .subscribe( data => { console.log( data ); } );
  }

  getArtist( termino: string ) {
    const headers = new HttpHeaders({

      Authorization: 'Bearer BQCMwCY8PXYsGU8yPsRKghvHmwRsvZiAQCLe0H1Z-eY8z5HH6wIahy6E3e5qYoEHkVu_4LZBJl2G1Fbf7AQ'
    
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=10`, { headers } )
    .pipe( map( data =>  data['artists'].items ) );  // Simplificado eliminando 'return' y las {}
  }
}
