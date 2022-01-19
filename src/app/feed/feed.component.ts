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
  usuario={userName: 'Victor Icoma', icone:'remember_me'};
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
    private dashboardService: DashboardService
    ) {
      this.cards$ = dashboardService.listagemCards()
      .pipe(
        catchError(error =>{
          return of([])
        })
      )
    }
}
