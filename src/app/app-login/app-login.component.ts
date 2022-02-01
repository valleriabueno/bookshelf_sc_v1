import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { GoogleAuthProvider, getAuth, signInWithRedirect } from 'firebase/auth';
import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';
import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';

const app = initializeApp(environment['firebase']);

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss'],
})
export class AppLoginComponent {

  token: string|undefined; // RECAPTCHA

  formularioLogin = this.loginBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required),
  });

  mensagemErro?: string;

  hasUnitNumber = false;

  constructor(
    private loginBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public conteudo: string,
    private telaLogin: MatDialog,
    private toast: HotToastService,
    private rotas: Router,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService
  ) {
    this.token = undefined // RECAPTCHA
  }

  get email() {
    return this.formularioLogin.get('email');
  }

  get senha() {
    return this.formularioLogin.get('senha');
  }

  loginFirebase() {
    if (!this.formularioLogin.valid) {
      return;
    }
      /* Verificar reCaptcha */
      else if(!grecaptcha.getResponse().length) {
        this.toast.error('Clique em "Não sou um robô"');
        return;
      }
    const { email, senha } = this.formularioLogin.value;
    this.autenticacaoFirebaseService
      .loginUsuario(email, senha)
      .pipe(
        this.toast.observe({
          success: 'Login valido, obrigado',
          loading: 'Redirecionando...',
          error: ({ message }) => {
            console.log(message);
            switch (message) {
              case 'Firebase: Error (auth/wrong-password).':
                this.mensagemErro = 'Senha incorreta';
                break;
              case 'Firebase: Error (auth/user-not-found).':
                this.mensagemErro = 'Usuário não encontrado';
                break;
              default:
                this.mensagemErro = `Algo deu errado: #${message}`;
                break;
            }
            return `${this.mensagemErro}`;
          },
        })
      )
      .subscribe({
        next: () => {
          this.rotas.navigate(['/cdd']);
          //Ao direcionar para a rota, feche o diálogo.
          this.telaLogin.closeAll();
        },
      });
  }

  onLoginWithGoogle() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    provider.addScope('https://www.googleapis.com/auth/userinfo.email');
    provider.addScope('https://www.googleapis.com/auth/userinfo.profile');
    provider.setCustomParameters({
      prompt: 'select_account',
    });
    signInWithRedirect(auth, provider);
  }

  // RECAPTCHA
  public send(form: NgForm): void {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }
    console.log(`Token [${this.token}] generated`);
  }

}
