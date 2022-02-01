import { SugestoesService } from './../servicosInterface/sugestoes.service';
import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';
import { Component } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Sugestoes } from '../modelosInterface/sugestoes';



@Component({
  selector: 'app-sugestoes',
  templateUrl: 'sugestoes.component.html',
  styleUrls: ['sugestoes.component.scss'],
})
export class SugestoesComponent  {
  cards$: Observable<Sugestoes[]>;
  usuario$= this.autenticacaoFirebaseService.usuarioLogado$;
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.cards$;
      }
      return this.cards$;

    })
  );
  constructor(
      private breakpointObserver: BreakpointObserver,
      private sugestoesService: SugestoesService,
      private autenticacaoFirebaseService: AutenticacaoFirebaseService
    ) {
      this.cards$ = sugestoesService.sugestoesCards()
      .pipe(
        catchError(error =>{
          return of([])
        })
      )
    }
}
