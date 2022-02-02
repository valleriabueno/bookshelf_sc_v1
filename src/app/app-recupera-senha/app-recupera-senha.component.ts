import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { getAuth } from 'firebase/auth';

import { AutenticacaoFirebaseService } from '../servicosInterface/autenticacao-firebase.service';


@Component({
  selector: 'app-app-recupera-senha',
  templateUrl: './app-recupera-senha.component.html',
  styleUrls: ['./app-recupera-senha.component.scss']
})
export class AppRecuperaSenhaComponent implements OnInit {

  email!: string

  constructor(
    private telaSenha: MatDialog,
    private toast: HotToastService,
    private auth: AutenticacaoFirebaseService,
    private rotas: Router,
  ) { }

  ngOnInit(): void {
  }

  resetPassword() {
    const auth = getAuth()
    this.auth.resetPassword(this.email)
    .pipe(
        this.toast.observe({
          success: 'Email enviado com sucesso, confira sua caixa de entrada.',
          loading: 'Enviando...',
          error: 'Desculpe, mas houve uma falha no envio.'
        })
    )
    .subscribe({
      next: () => {
        this.rotas.navigate(['/']);
        this.telaSenha.closeAll();
      }
    });
  }
}
