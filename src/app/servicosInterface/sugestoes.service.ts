import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sugestoes } from '../modelosInterface/sugestoes';
import { first, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SugestoesService {
  private readonly uriAPI='../../assets/sugestoes.json';

  constructor(private cardsSugestoes: HttpClient) { }

  sugestoesCards (){
    return this.cardsSugestoes.get<Sugestoes[]>(this.uriAPI)
    .pipe(
      first(),
      tap(apiSugestoes => console.log(apiSugestoes))
    )
  }
}
