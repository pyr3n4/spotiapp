import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styles: []
})
export class TarjetaComponent {

  @Input() items: any[] = [];

  constructor() { }

  verArtista( item: any ) {

    console.log(item);
    let artistaId: string;

    if ( item.type === 'artist') {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }

    console.log(artistaId);

  }

}
