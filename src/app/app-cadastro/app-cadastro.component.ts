import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';

export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const senha = control.get('senha')?.value;
    const confirma = control.get('confirmaSenha')?.value;

    if (senha && confirma && senha !== confirma) {
      return {
        senhaConfirmada: true
      }
    }
    return null;
  }
}

@Component({
  selector: 'app-app-cadastro',
  templateUrl: './app-cadastro.component.html',
  styleUrls: ['./app-cadastro.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },]
})
export class AppCadastroComponent implements OnInit {

  formularioCadastro = this.loginBuilder.group({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required),
    confirmaSenha: new FormControl('', Validators.required),
    img: new FormControl('', Validators.required),
  }, { validators: passwordMatchValidator() });

  mensagemErro?: string;

  constructor(
    private loginBuilder: FormBuilder,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService,
    private toast: HotToastService,
    private rotas: Router,
  ) { }

  get nome() {
    return this.formularioCadastro.get('nome')
  }

  get email() {
    return this.formularioCadastro.get('email')
  }

  get senha() {
    return this.formularioCadastro.get('senha')
  }

  get confirmaSenha() {
    return this.formularioCadastro.get('confirmaSenha')
  }
  get img() {
    return this.formularioCadastro.get('img')
  }

  enviaCadastro() {
    if (!this.formularioCadastro.valid) {
      return;
    }
    const { nome, email, senha, img } = this.formularioCadastro.value;
    this.autenticacaoFirebaseService
      .cadastrarUsuario(nome, email, senha, )
      .pipe(
        this.toast.observe({
          success: 'Cadatro executado, bem vindo ao BookShelf',
          loading: 'Enviando informações...',
          error: ({ message }) => {
            console.log(message);
            switch (message) {
              case 'Firebase: Password should be at least 6 characters (auth/weak-password).':
                this.mensagemErro =
                  'Sua senha precisa ter no mínimo 6 caracteres!';
                break;
              case 'Firebase: Error (auth/invalid-email).':
                this.mensagemErro = 'Endereço de E-mail inválido!';
                break;
              case 'Firebase: Error (auth/email-already-in-use).':
                this.mensagemErro = 'Endereço de E-mail já está em uso!'
                break
              default:
                this.mensagemErro = `Algo deu errado: #${message}`
                break
            }
            return `${this.mensagemErro}`;
          },
        })
      ).subscribe(() => {
        this.rotas.navigate(['/'])
      });
  }
  ngOnInit(): void {
  }
}
