import { BestSellerList } from './../modelosInterface/best-seller-list';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NytService {
  private readonly urlBase =
    'https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=';
  private readonly apiKey = 'zViuG93AKwL2mRvAgLl2bGAZMnWs2fmp';

  constructor(private http: HttpClient) {}

  getBestSellerList() {
    const url = this.urlBase + this.apiKey
    return this.http.get<BestSellerList>(url)
  }
}
