import { Generos } from './../modelos/generos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  private readonly urlAPI = '/assets/generos.json';

  constructor(private clienteDados: HttpClient) { }

  listagemGeneros() {
    return this.clienteDados.get<Generos[]>(this.urlAPI)
    .pipe(
      first(),
      delay(500),
      tap(apiGeneros => console.log(apiGeneros))
    )
  }
}
