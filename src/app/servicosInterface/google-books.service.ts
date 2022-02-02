import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BestSeller } from '../modelosInterface/best-seller';

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksService {
  private readonly baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=isbn:'
  private readonly apiKey = 'AIzaSyCXKLKvnKy4Y_Csni-LekOTMoVhOLuDkSw'

  constructor(private http: HttpClient) { }

  getBestSeller(isbn: string) {
    const url = `${this.baseUrl}${isbn}&key=${this.apiKey}`
    return this.http.get<BestSeller>(url)
  }
}
