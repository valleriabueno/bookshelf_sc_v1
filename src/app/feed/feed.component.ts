import { MatDialog } from '@angular/material/dialog';
import { AppDialogosComponent } from './../app-compartilhado/app-dialogos/app-dialogos.component';
import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';
import { DashboardService } from './../servicosInterface/dashboard.service';
import { Dashboard } from './../modelosInterface/dashboard';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {
  cards$: Observable<Dashboard[]>;
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
    private dashboardService: DashboardService,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService,
    public dialogo: MatDialog
    ) {
      this.cards$ = dashboardService.listagemCards()
      .pipe(
        catchError(error =>{
          this.abrirDialogoErro("Erro ao carregar a tabela: #BS -"+error.status)
          return of([])
        })
      )
    }
    abrirDialogoErro(erroMsg: string) {
      this.dialogo.open(AppDialogosComponent, {
        data: erroMsg
      })
    }
}
