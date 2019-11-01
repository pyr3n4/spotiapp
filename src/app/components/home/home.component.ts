import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  // paises: any[] = [];

  // constructor( private http: HttpClient) { 
  //   this.http.get('https://restcountries.eu/rest/v2/lang/es')
  //   .subscribe( (dataPaises: any) => {
  //     this.paises = dataPaises;
  //     console.log(dataPaises);
  //   });
  //  }

  newReleases: any[] = [];
  loading: boolean;
  error: boolean;
  textoError: any = '';

  constructor( private spotify: SpotifyService) {

    this.loading = true;
    this.error = false;
    
    this.spotify.getNewReleases()
    .subscribe( ( data: any) => { 
      console.log( data ); 
      this.newReleases = data;
      this.loading = false;
    }, ( errorServicio ) => {
      
      this.loading = false;
      this.error = true;
      this.textoError = errorServicio.error.error.message;
      // console.log(errorServicio.error.error.message);

    } );
  }

  // ngOnInit() {
  // }

}
