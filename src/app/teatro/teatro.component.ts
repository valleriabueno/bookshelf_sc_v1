import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { TeatroService } from './../servicosInterface/teatro.service';
import { Teatro } from '../modelosInterface/teatro';
import { AppDialogosComponent } from './../app-compartilhado/app-dialogos/app-dialogos.component';

@Component({
  selector: 'app-teatro',
  templateUrl: './teatro.component.html',
  styleUrls: ['./teatro.component.scss']
})
export class TeatroComponent implements OnInit {

  livrosTeatro$: Observable <Teatro[]>;
  visaoColunas=[ 'position',  'rosto', 'titulo', 'autor'];

  constructor(
    private teatroService: TeatroService,
    public dialogo: MatDialog
  ) {
    this.livrosTeatro$ = teatroService.ListagemTeatro()
    .pipe(
      catchError(error => {
        this.abrirDialogoErro("erro ao carregar a tabela: #BS -"+error.status)
        return of([])
      })
    )
  }

  abrirDialogoErro(erroMsg: string) {
    this.dialogo.open(AppDialogosComponent, {
      data: erroMsg
    })
  }

  ngOnInit(): void {
  }

}
