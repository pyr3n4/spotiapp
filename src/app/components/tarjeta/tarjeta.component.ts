import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styles: []
})
export class TarjetaComponent {

  @Input() items: any[] = [];

  constructor( private router: Router) { }

  verArtista( item: any ) {

    console.log(item);
    let artistaId: string;

    // Obtención del artista ID
    if ( item.type === 'artist') {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }

    this.router.navigate( [ '/artista', artistaId ]);

    //console.log(artistaId);

  }

}
