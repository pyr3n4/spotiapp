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

  getQuery(query: string) {
    
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({

      Authorization: 'Bearer BQCO8JdqBr-8Gz8NOxAMhQ-0DH6H2MNJQ8qaq4npDBGEwEtYfBtROqWiVEdBQ9Ke6sVtonnt0MtC6T8-kdw'
    
    });

    return this.http.get( url , { headers } );

  }

  getNewReleases(){
    
    // Devuelve un observable
    return this.getQuery('browse/new-releases?limit=10' )  // Opciones entre {}
       .pipe( map( data => data['albums'].items) ); // Otra forma de buscar una propiedad, en lugar de indicar que data es de tipo 'any'
    // .subscribe( data => { console.log( data ); } );
  }

  // Obtener artistas con la búsqueda
  getArtists( termino: string ) {
    

    return this.getQuery(`search?q=${ termino }&type=artist&limit=10` )
       .pipe( map( data =>  data['artists'].items ) );  // Simplificado eliminando 'return' y las {}
  }

  // Buscar artista por ID
  getArtist( id: string ) {
    

    return this.getQuery(`artists/${ id }` );
       //.pipe( map( data =>  data['artists'].items ) );  // Simplificado eliminando 'return' y las {}
  }

  getTopTracks(){}
  
}
