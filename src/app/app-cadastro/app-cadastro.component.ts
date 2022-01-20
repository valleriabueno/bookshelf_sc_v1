import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';

export function passwordMatchValidator(): ValidatorFn {
  return(control: AbstractControl): ValidationErrors | null => {
    const senha = control.get('senha')?.value;
    const confirma = control.get('confirmaSenha')?.value;

    if(senha && confirma && senha !== confirma){
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
  styleUrls: ['./app-cadastro.component.scss']
})
export class AppCadastroComponent implements OnInit {

  formularioCadastro = this.loginBuilder.group({
    nome: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required),
    confirmaSenha: new FormControl('', Validators.required)
  }, {validador: passwordMatchValidator()});

  constructor(private loginBuilder: FormBuilder) { }

  get nome(){
    return this.formularioCadastro.get('nome')
  }

  get email(){
    return this.formularioCadastro.get('email')
  }

  get senha(){
    return this.formularioCadastro.get('senha')
  }

  get confirmaSenha(){
    return this.formularioCadastro.get('confirmaSenha')
  }

  enviaCadastro(){
    alert('Parabens!')
  }

  ngOnInit(): void {
  }
}
