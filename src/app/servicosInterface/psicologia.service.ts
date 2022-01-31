import { first, delay, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Psicologia } from './../modelosInterface/psicologia';


@Injectable({
  providedIn: 'root'
})
export class PsicologiaService {

  private readonly uriAPI = '../../assets/psicologia.json'

  constructor( private psicologiaLivro: HttpClient) { }


  ListagemPsicologia() {
    return this.psicologiaLivro.get<Psicologia[]>(this.uriAPI)

    .pipe(
      first(),
      delay(500),
      tap(apiPscologia => console.log(apiPscologia))
    )
  }

}
