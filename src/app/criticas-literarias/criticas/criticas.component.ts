import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { LerMaisComponent } from './../ler-mais/ler-mais.component';
import { catchError, Observable, of, tap } from 'rxjs';
import { CriticasService } from './../service/criticas.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Critica } from '../modelos/critica';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-criticas',
  templateUrl: './criticas.component.html',
  styleUrls: ['./criticas.component.scss'],
})
export class CriticasComponent implements OnInit {
  criticas$: Observable<Critica[]>;

  busca?: string

  resultado?: Critica

  constructor(
    private criticasService: CriticasService,
    private telaCriticas: MatDialog
  ) {
    this.criticas$ = criticasService.listagemCriticas().pipe(
      catchError((error) => {
        console.log(error);
        return of([]);
      })
    );
  }

  abrirLerMais(critica: [string], titulo: string, autor: string, fonte: string, banner:string) {
    this.telaCriticas.open(LerMaisComponent, {
      data: {
        critica: critica,
        titulo: titulo,
        autor: autor,
        fonte: fonte,
        banner
      },
    });
  }

  buscaCritica(array: Critica[]) {
    this.resultado = array.find(e => e.titulo == this.busca)
  }

  voltar() {
    this.resultado = undefined
    this.busca = undefined
  }

  ngOnInit(): void {
  }
}
