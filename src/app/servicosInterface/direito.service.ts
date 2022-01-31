import { Direito } from './../modelosInterface/direito';
import { first, delay, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DireitoService {

  private readonly uriAPI = '../../assets/direito.json'

  constructor( private direitoLivro: HttpClient) { }

ListagemDireito() {
  return this.direitoLivro.get<Direito[]>(this.uriAPI)
  .pipe(
    first(),
    delay(500),
    tap(apiDireito => console.log(apiDireito))
  )
}

}
