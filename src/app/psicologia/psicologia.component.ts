import { AppDialogosComponent } from './../app-compartilhado/app-dialogos/app-dialogos.component';
import { MatDialog } from '@angular/material/dialog';
import { PsicologiaService } from './../servicosInterface/psicologia.service';
import { Observable, catchError, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Psicologia } from '../modelosInterface/psicologia';

@Component({
  selector: 'app-psicologia',
  templateUrl: './psicologia.component.html',
  styleUrls: ['./psicologia.component.scss']
})
export class PsicologiaComponent implements OnInit {

  livrosPsicologia$: Observable <Psicologia[]>;
  visaoColunas=[ 'position',  'rosto', 'titulo', 'autor'];

  constructor(
    private psicologiaService: PsicologiaService,
    public dialogo: MatDialog
  ) {
    this.livrosPsicologia$ = psicologiaService.ListagemPsicologia()
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
