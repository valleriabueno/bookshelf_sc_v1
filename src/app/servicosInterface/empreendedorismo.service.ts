import { first, delay, tap } from 'rxjs';
import { Empreendedorismo } from './../modelosInterface/empreendedorismo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpreendedorismoService {

  private readonly uriAPI = '../../assets/empreendedorismo.json'

  constructor(private empreendedorismoLivro: HttpClient) { }

  ListagemEmpreendedorismo() {
    return this.empreendedorismoLivro.get<Empreendedorismo[]>(this.uriAPI)
    .pipe(
      first(),
      delay(500),
      tap(apiEmpreendedorismo => console.log(apiEmpreendedorismo))
    )
  }
}
