import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { GoogleAuthProvider, getAuth, signInWithRedirect } from "firebase/auth";
import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';
import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';


const app = initializeApp(environment['firebase']);

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss']
})
export class AppLoginComponent {
  formularioLogin = this.loginBuilder.group({
    email: new FormControl('',[Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required)
  });

  hasUnitNumber=false;

  constructor(
    private loginBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public conteudo:string,
    private telaLogin: MatDialog,
    private toast: HotToastService,
    private rotas: Router,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService
    ) {}

    get email(){
      return this.formularioLogin.get('email')
    }

    get senha(){
      return this.formularioLogin.get('senha')
    }
    loginFirebase(){
      if(!this.formularioLogin.valid){
        return;
      }
      const {email, senha} = this.formularioLogin.value;
      this.autenticacaoFirebaseService.loginUsuario(email, senha)
      .pipe(
        this.toast.observe({
          success: 'Login valido, obrigado',
          loading: 'Redirecionando...',
          error: 'Algo deu errado, confira as informações'
        })
      ).subscribe(()=>{
        this.rotas.navigate(['/cdd']);
        //Ao direcionar para a rota, feche o diálogo.
        this.telaLogin.closeAll();
      })
  }

  onLoginWithGoogle() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    provider.addScope('https://www.googleapis.com/auth/userinfo.email');
    provider.addScope('https://www.googleapis.com/auth/userinfo.profile');
    provider.setCustomParameters({
      prompt: 'select_account'
    });
    signInWithRedirect(auth, provider);
  }
}
