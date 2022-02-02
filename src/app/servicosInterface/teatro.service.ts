import { first, delay, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teatro } from './../modelosInterface/teatro';


@Injectable({
  providedIn: 'root'
})
export class TeatroService {

  private readonly uriAPI = '../../assets/teatro.json'

  constructor( private teatroLivro: HttpClient) { }


  ListagemTeatro() {
    return this.teatroLivro.get<Teatro[]>(this.uriAPI)

    .pipe(
      first(),
      delay(500),
      tap(apiTeatro => console.log(apiTeatro))
    )
  }

}
