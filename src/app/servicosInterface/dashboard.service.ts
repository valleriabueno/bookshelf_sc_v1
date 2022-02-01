import { Dashboard } from './../modelosInterface/dashboard';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private readonly uriAPI='../../assets/dashboard.json';

  constructor(private cardsDashboard: HttpClient) {}

  listagemCards(){
    return this.cardsDashboard.get<Dashboard[]>(this.uriAPI)
    .pipe(
      first(),
      delay(500),
      tap(apiDashboard => console.log(apiDashboard))
    )
  }
}
