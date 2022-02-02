import { Observable } from 'rxjs';
import { BestSellerBrService } from './../servicosInterface/best-seller-br.service';
import { Component, OnInit } from '@angular/core';
import { BestSeller } from '../modelosInterface/best-seller';
import { BestSellerBr } from '../modelosInterface/best-seller-br';

import { GoogleBooksService } from './../servicosInterface/google-books.service';
import { NytService } from './../servicosInterface/nyt.service';

@Component({
  selector: 'app-mais-vendidos',
  templateUrl: './mais-vendidos.component.html',
  styleUrls: ['./mais-vendidos.component.scss'],
})
export class MaisVendidosComponent implements OnInit {
  bestSellerIsbnList = [] as string[];
  bookTitle?: string
  bookCover?: string
  author?: string
  bestSellerBr$?: Observable<BestSellerBr[]>

  options = ["Brasil", "Mundo"]
  selectedOption:string = "Mundo"

  books = [] as BestSeller[]

  constructor(
    private nytService: NytService,
    private googleBooksService: GoogleBooksService,
    private bestSellerBrService: BestSellerBrService
  ) {}

  getBookList() {
    this.nytService.getBestSellerList().subscribe({
      next: (data) => {
        data.results.forEach((e) => {
          this.bestSellerIsbnList.push(e.isbns[0].isbn10);
        });
        this.listBooks()
        this.getBestSellerBr()
      },
    });
  }

  listBooks() {
    this.bestSellerIsbnList.forEach(isbn => {
      this.googleBooksService.getBestSeller(isbn).subscribe({
        next: data => {
          this.books.push(data)
          this.books.sort((a, b) => {
            let fa = a.items[0].volumeInfo.title.toLowerCase(),
                fb = b.items[0].volumeInfo.title.toLowerCase()
            if(fa < fb) {
              return -1
            }
            if(fa > fb) {
              return 1
            }
            return 0
          })
        }
      })
    })
  }

  getBestSellerBr() {
    this.bestSellerBr$ = this.bestSellerBrService.getBestSellerList()
  }

  ngOnInit(): void {
    this.getBookList();
  }
}
