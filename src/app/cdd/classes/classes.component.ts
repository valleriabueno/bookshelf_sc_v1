import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { AppDialogosComponent } from './../../app-compartilhado/app-dialogos/app-dialogos.component';
import { Generos } from './../modelos/generos';
import { GenerosService } from './../service/generos.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  livrosGeneros$: Observable <Generos[]>;
  visaoColunas=['_idGenero','nomeGenero','decimalGenero'];

  constructor(
    private generosService: GenerosService,
    public dialogo: MatDialog
    ) {
    this.livrosGeneros$ = generosService.listagemGeneros()
    .pipe(
      catchError(error =>{
        this.abrirDialogoErro("Erro ao carregar a tabela: #BS -"+error.status)
        return of([])
      })
    );
  }

  abrirDialogoErro(erroMsg: string){
    this.dialogo.open(AppDialogosComponent,{
      data: erroMsg
    })
  }

  ngOnInit(): void {
  }
}
