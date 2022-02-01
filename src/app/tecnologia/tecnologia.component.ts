import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { TecnologiaService } from './../servicosInterface/tecnologia.service';
import { Tecnologia } from '../modelosInterface/tecnologia';
import { AppDialogosComponent } from './../app-compartilhado/app-dialogos/app-dialogos.component';

@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.scss']
})
export class TecnologiaComponent implements OnInit {

  livrosTecnologia$: Observable <Tecnologia[]>;
  visaoColunas=[ 'position',  'rosto', 'titulo', 'autor'];

  constructor(
    private tecnologiaService: TecnologiaService,
    public dialogo: MatDialog
  ) {
    this.livrosTecnologia$ = tecnologiaService.ListagemTecnologia()
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
