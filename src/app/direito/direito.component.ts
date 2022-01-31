import { AppDialogosComponent } from './../app-compartilhado/app-dialogos/app-dialogos.component';
import { MatDialog } from '@angular/material/dialog';
import { DireitoService } from './../servicosInterface/direito.service';

import { Direito } from './../modelosInterface/direito';
import { Observable, catchError, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direito',
  templateUrl: './direito.component.html',
  styleUrls: ['./direito.component.scss']
})
export class DireitoComponent implements OnInit {

  livrosDireito$: Observable <Direito[]>;
  visaoColunas=['rosto', 'titulo', 'autor'];

  constructor(
    private direitoService: DireitoService,
    public dialogo: MatDialog
  ) {
    this.livrosDireito$ = direitoService.ListagemDireito()
    .pipe(
      catchError(error => {
        this.abrirDialogoErro("Erro ao carregar a tabela: #BS -"+error.status)
        return  of([])
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
