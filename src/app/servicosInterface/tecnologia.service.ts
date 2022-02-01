import { first, delay, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tecnologia } from './../modelosInterface/tecnologia';


@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {

  private readonly uriAPI = '../../assets/tecnologia.json'

  constructor( private tecnologiaLivro: HttpClient) { }


  ListagemTecnologia() {
    return this.tecnologiaLivro.get<Tecnologia[]>(this.uriAPI)

    .pipe(
      first(),
      delay(500),
      tap(apiTecnologia => console.log(apiTecnologia))
    )
  }

}
