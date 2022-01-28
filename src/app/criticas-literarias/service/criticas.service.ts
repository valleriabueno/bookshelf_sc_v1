import { first, delay, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Critica } from '../modelos/critica';

@Injectable({
  providedIn: 'root'
})
export class CriticasService {
  private readonly url = '/assets/criticas.json'

  constructor(private http: HttpClient) { }

  listagemCriticas() {
    // console.log("teste")
    return this.http.get<Critica[]>(this.url)
      .pipe(
        first(),
        delay(500),
        tap(criticas => console.log(criticas))
      )
  }
}
