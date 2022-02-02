import { first, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BestSellerBr } from '../modelosInterface/best-seller-br';

@Injectable({
  providedIn: 'root'
})
export class BestSellerBrService {
  private readonly uriApi = '../../assets/bestSellersBr.json'

  constructor(private http: HttpClient) { }

  getBestSellerList() {
    return this.http.get<BestSellerBr[]>(this.uriApi)
      .pipe(
        first(),
        tap(bestSellerBr => console.log(bestSellerBr))
      )
  }
}
