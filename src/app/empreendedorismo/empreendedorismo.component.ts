import { AppDialogosComponent } from './../app-compartilhado/app-dialogos/app-dialogos.component';
import { Empreendedorismo } from './../modelosInterface/empreendedorismo';
import { catchError, of, Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { EmpreendedorismoService } from './../servicosInterface/empreendedorismo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empreendedorismo',
  templateUrl: './empreendedorismo.component.html',
  styleUrls: ['./empreendedorismo.component.scss']
})
export class EmpreendedorismoComponent implements OnInit {

  livrosEmpreendedorismo$: Observable <Empreendedorismo[]>;
  visaoColunas=['position', 'rosto', 'titulo', 'autor'];

  constructor(
    private empreendedorismoService: EmpreendedorismoService,
    public dialogo: MatDialog
  ) {
    this.livrosEmpreendedorismo$ = empreendedorismoService.ListagemEmpreendedorismo()
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


